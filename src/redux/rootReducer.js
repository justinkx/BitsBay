import { combineReducers } from 'redux'

import ApplicationReducer from './reducers/application.reducer'

const rootReducer = combineReducers({
  application: ApplicationReducer,
})

export default rootReducer
