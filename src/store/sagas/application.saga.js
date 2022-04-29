import {
  put,
  take,
  call,
  spawn,
  select,
  takeEvery,
  all,
} from 'redux-saga/effects'
import NetInfo from '@react-native-community/netinfo'
import { eventChannel } from 'redux-saga'
import { AppState } from 'react-native'

import {
  NET_STATE_CHANGE,
  APPSTATE_CHANGE,
  UPDATE_NET_STATE,
  updateAppState,
  updateNetState,
  applicationReady,
  connectSocket,
  disconnectSocket,
} from 'actions/application.actions'
import {
  isInternetSelector,
  isSocketLiveSelector,
  isSocketClosedSelector,
} from '../selectors/application.selector'

function* handleAppStateChange(nextState) {
  yield put(updateAppState(nextState))

  const isSocketOnline = yield select(isSocketLiveSelector)
  console.log({ nextState, isSocketOnline })
  if (nextState === 'background') {
    yield put(disconnectSocket())
  } else if (nextState === 'active') {
    const isSocketClosed = yield select(isSocketClosedSelector)

    if (isSocketClosed) {
      yield put(connectSocket())
    } else {
      yield take('REDUX_WEBSOCKET::CLOSED')
      yield put(connectSocket())
    }
  }
}

function* handleNetState(netState = {}) {
  yield put(updateNetState(netState))
}

function* onApplicationChannelEvent({ type, payload }) {
  switch (type) {
    case APPSTATE_CHANGE: {
      yield call(handleAppStateChange, payload)
      break
    }
    case NET_STATE_CHANGE: {
      yield call(handleNetState, payload)
      break
    }
    default: {
      // no actions
    }
  }
}
function* applicationEvents() {
  const channel = eventChannel((emitter) => {
    const onAppStateChange = (nextAppState) => {
      emitter({
        type: APPSTATE_CHANGE,
        payload: nextAppState,
      })
    }
    const appStateListener = AppState.addEventListener(
      'change',
      onAppStateChange
    )

    const onNetInfo = (netState) => {
      emitter({
        type: NET_STATE_CHANGE,
        payload: netState,
      })
    }
    const unsubscribe = NetInfo.addEventListener(onNetInfo)

    return () => {
      appStateListener.remove()
      unsubscribe()
    }
  })

  yield takeEvery(channel, onApplicationChannelEvent)
}

export default function* applicationSaga() {
  yield spawn(applicationEvents)

  let internetReachable = yield select(isInternetSelector)
  while (!internetReachable) {
    const { netState } = yield take(UPDATE_NET_STATE)
    internetReachable = netState?.isInternetReachable
  }
  yield all([put(applicationReady()), put(connectSocket())])
}
