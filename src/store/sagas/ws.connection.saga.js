import { put, takeLatest, select, all } from 'redux-saga/effects'
import { connect, disconnect } from '@giantmachines/redux-websocket'

import { WS_BASE_URL } from 'helpers/Constants'

import {
  CONNECT_SOCKET,
  DISCONNECT_SOCKET,
} from '../actions/application.actions'
import { isSocketLiveSelector } from '../selectors/application.selector'

function* connectToSocket() {
  const isLive = yield select(isSocketLiveSelector)

  if (!isLive) {
    yield put(connect(WS_BASE_URL))
  }
}

function* disconnectSocket() {
  const isLive = yield select(isSocketLiveSelector)

  if (isLive) {
    yield put(disconnect())
  }
}

export default function* websocketConnectionSaga() {
  yield all([
    takeLatest(CONNECT_SOCKET, connectToSocket),
    takeLatest(DISCONNECT_SOCKET, disconnectSocket),
  ])
}
