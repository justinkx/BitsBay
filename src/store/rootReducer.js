import { combineReducers } from '@reduxjs/toolkit'

import ApplicationReducer from './reducers/application.reducer'

const rootReducer = combineReducers({
  application: ApplicationReducer,
})

export default rootReducer
