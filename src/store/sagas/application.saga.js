import { put, take, call, spawn } from 'redux-saga/effects'
import NetInfo from '@react-native-community/netinfo'
import { eventChannel } from 'redux-saga'
import { AppState } from 'react-native'

import {
  NET_STATE_CHANGE,
  APPSTATE_CHANGE,
  updateAppState,
  updateNetState,
} from 'actions/application.actions'

function* handleAppStateChange(nextState) {
  yield put(updateAppState(nextState))
}

function* handleNetState(netState) {
  yield put(updateNetState(netState))
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
      APPSTATE_CHANGE,
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

  while (true) {
    const { type, payload } = yield take(channel)
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
}

export default function* applicationSaga() {
  yield spawn(applicationEvents)
}
