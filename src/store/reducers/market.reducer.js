import { SAVE_ALL_ASSETS, SAVE_ALL_LIST } from '../actions/market.actions'

const initialState = {
  assets: {},
  list: []
}

export default function MarketReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ALL_ASSETS:
      return { ...state, assets: action.assets }
    case SAVE_ALL_LIST:
      return { ...state, list: action.list }
    default:
      return { ...state }
  }
}
