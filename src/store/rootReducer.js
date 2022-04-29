import { combineReducers } from '@reduxjs/toolkit'

import ApplicationReducer from './reducers/application.reducer'
import MarketReducer from './reducers/market.reducer'

const rootReducer = combineReducers({
  application: ApplicationReducer,
  market: MarketReducer,
})

export default rootReducer
