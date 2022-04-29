import { spawn, all, call } from 'redux-saga/effects'

import applicationSaga from './sagas/application.saga'

export default function* rootSaga() {
  const sagas = [applicationSaga]

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
