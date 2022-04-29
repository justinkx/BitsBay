import { SAVE_ALL_ASSETS } from '../actions/market.actions'

const initialState = {
  assets: [],
  ticker: {},
}

export default function MarketReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ALL_ASSETS:
      return { ...state, assets: action.assets }

    default:
      return { ...state }
  }
}
