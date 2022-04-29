import { put, take } from 'redux-saga/effects'
import { connect } from '@giantmachines/redux-websocket'

import { WS_BASE_URL } from 'helpers/Constants'

import { APP_IS_READY } from '../actions/application.actions'

export default function* WebsocketConnectionSaga() {
  while (true) {
    yield take(APP_IS_READY)
    yield put(connect(WS_BASE_URL))
  }
}
