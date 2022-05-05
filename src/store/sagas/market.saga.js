import { put, take, call, spawn } from 'redux-saga/effects'
import _reduce from 'lodash/reduce'
import { send } from "@giantmachines/redux-websocket";

import { getAllAssets, getAllList } from '../../services/ApiService'
import { APP_IS_READY } from '../actions/application.actions'
import { saveAllAssets, saveAllList } from '../actions/market.actions'

function* fetchAssetSaga() {
  try {
    yield take(APP_IS_READY)

    const assets = yield call(getAllAssets)

    const assetSymbols = _reduce(assets, (accu, current) => {
      return {
        ...accu,
        [current.symbol]: current
      }
    }, {})
    yield put(saveAllAssets(assetSymbols))
    yield put(
      send({
        method: "SET_PROPERTY",
        params: ["combined", true],
        id: 5,
      })
    );
    yield put(
      send({
        method: "SUBSCRIBE",
        params: ["!ticker@arr"],
        id: 1,
      })
    );
  } catch (error) {
    console.log('error >', error)
  }
}

function* fetchAllListSaga() {
  try {
    yield take(APP_IS_READY)

    const list = yield call(getAllList)
    yield put(saveAllList(list))
  } catch (error) {
    console.log('error >', error)
  }
}

export default function* marketSaga() {
  yield spawn(fetchAssetSaga)
  yield spawn(fetchAllListSaga)
}
