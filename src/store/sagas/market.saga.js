import { put, take, call, spawn } from 'redux-saga/effects'

import { getAllAssets } from 'services/ApiService'

import { APP_IS_READY } from '../actions/application.actions'
import { saveAllAssets } from '../actions/market.actions'

function* fetchAssetSaga() {
  try {
    yield take(APP_IS_READY)

    const assets = yield call(getAllAssets)
    yield put(saveAllAssets(assets))
  } catch (error) {
    console.log(error)
  }
}

export default function* marketSaga() {
  yield spawn(fetchAssetSaga)
}
