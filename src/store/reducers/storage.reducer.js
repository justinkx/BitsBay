import _pull from 'lodash/pull'

import {
  REMOVE_FROM_FAVOURITES,
  ADD_TO_FAVOURITES,
} from '../actions/storage.actions'

const initialState = {
  favourites: [],
}

export default function StorageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return { ...state, favourites: [...state.favourites, action.symbol] }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: _pull([...state.favourites], action.symbol),
      }
    default:
      return { ...state }
  }
}
