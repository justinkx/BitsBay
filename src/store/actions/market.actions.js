export const GET_ALL_ASSETS = 'GET_ALL_ASSETS'
export const SAVE_ALL_ASSETS = 'SAVE_ALL_ASSETS'

export const GET_TICKERS = 'GET_TICKERS'
export const SAVE_TICKER = 'SAVE_TICKER'

export const GET_ALL_LIST = 'GET_ALL_LIST'
export const SAVE_ALL_LIST = 'SAVE_ALL_LIST'

export const getAllAssets = () => ({ type: GET_ALL_ASSETS })
export const saveAllAssets = (assets) => ({ type: SAVE_ALL_ASSETS, assets })

export const getTickers = () => ({ type: GET_TICKERS })
export const saveTicker = (ticker) => ({ type: SAVE_TICKER, ticker })

export const getAllList = () => ({ type: GET_ALL_LIST })
export const saveAllList = (list) => ({ type: SAVE_ALL_LIST, list })
