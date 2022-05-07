import { createSelector } from 'reselect'

const storageReducer = (state) => state.storage

export const favouritePairSelector = createSelector(
  storageReducer,
  (storage) => storage.favourites || []
)
