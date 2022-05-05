import { spawn, all, call } from 'redux-saga/effects'

import applicationSaga from './sagas/application.saga'
import marketSaga from './sagas/market.saga'
import websocketConnectionSaga from './sagas/ws.connection.saga'
import wsMessageSaga from './sagas/ws.message.saga'

export default function* rootSaga() {
  const sagas = [
    applicationSaga,
    marketSaga,
    websocketConnectionSaga,
    wsMessageSaga,
  ]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
