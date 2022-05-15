import { put, takeEvery, all, select } from 'redux-saga/effects'
import _assign from 'lodash/assign'
import _identity from 'lodash/identity'
import _pickBy from 'lodash/pickBy'
import _keys from 'lodash/keys'
import _findLast from 'lodash/findLast'
import _pick from 'lodash/pick'

import { MESSAGE, OPEN } from '../actions/socket.actions'
import { tickerTransform } from '../adaptor/tickers.adaptor'
import { saveTicker, getTickers } from '../actions/market.actions'
import { getAssetKeysSelector } from '../selectors/market.selector'

function* reduxWebsocketMessage(action) {
  const { payload } = action
  const parsedMessage = JSON.parse(payload?.message)

  try {
    switch (parsedMessage?.stream) {
      case '!miniTicker@arr': {
        const tickers = tickerTransform(parsedMessage.data)
        const keys = yield select(getAssetKeysSelector)
        return yield put(saveTicker(_pick(tickers, keys)))
      }
    }
  } catch {}
}

function* reduxWebsocketOpen() {
  yield put(getTickers())
}

export default function* wsMessageSaga() {
  yield all([
    takeEvery(MESSAGE, reduxWebsocketMessage),
    takeEvery(OPEN, reduxWebsocketOpen),
  ])
}
