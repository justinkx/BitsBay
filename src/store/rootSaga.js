import { spawn, all, call } from 'redux-saga/effects'

import applicationSaga from './sagas/application.saga'
import marketSaga from './sagas/market.saga'
import websocketConnectionSaga from './sagas/ws.connection.saga'

export default function* rootSaga() {
  const sagas = [applicationSaga, marketSaga, websocketConnectionSaga]

  yield all(
    sagas.map((saga) => spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  )
}
