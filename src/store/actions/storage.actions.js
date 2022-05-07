export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

export const addToFavourites = (symbol) => ({ type: ADD_TO_FAVOURITES, symbol })
export const removeFromFavourites = (symbol) => ({
  type: REMOVE_FROM_FAVOURITES,
  symbol,
})
