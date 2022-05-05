import { put, takeEvery, all } from "redux-saga/effects";
import _assign from "lodash/assign";
import _identity from "lodash/identity";
import _pickBy from "lodash/pickBy";
import _keys from "lodash/keys";
import _findLast from "lodash/findLast";

import {MESSAGE} from '../actions/socket.actions'
import {tickerTransform} from '../adaptor/tickers.adaptor'
import {saveTicker} from '../actions/market.actions'

function* reduxWebsocketMessage(action) {
    const { payload } = action;
    const parsedMessage = JSON.parse(payload?.message);

    try {
        switch (parsedMessage?.stream) {
            case '!ticker@arr':
                const tickers = tickerTransform(parsedMessage.data);
               return yield put(saveTicker(tickers))
        }
    } catch {}
}

export default function* wsMessageSaga() {
    yield all([
      takeEvery(MESSAGE, reduxWebsocketMessage),
    ]);
  }