export const GET_ALL_ASSETS = 'GET_ALL_ASSETS'
export const SAVE_ALL_ASSETS = 'SAVE_ALL_ASSETS'

export const GET_TICKER = 'GET_TICKER'
export const SAVE_TICKER = 'SAVE_TICKER'

export const getAllAssets = () => ({ type: GET_ALL_ASSETS })

export const saveAllAssets = (assets) => ({ type: SAVE_ALL_ASSETS, assets })

export const getTickers = () => ({ type: GET_TICKER })

export const saveTicker = (ticker) => ({ type: SAVE_TICKER, ticker })
