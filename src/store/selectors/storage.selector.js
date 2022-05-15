import { createSelector } from 'reselect'
import _includes from 'lodash/includes'

const storageReducer = (state) => state.storage

export const favouritePairSelector = createSelector(
  storageReducer,
  (storage) => storage.favourites || []
)

export const isFavPairSelector = createSelector(
  favouritePairSelector,
  (fav) => (pair) => _includes(fav, pair)
)
