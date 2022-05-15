import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import ApplicationReducer from './reducers/application.reducer'
import MarketReducer from './reducers/market.reducer'
import StorageReducer from './reducers/storage.reducer'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: ['application', 'market', 'storage'],
  stateReconciler: autoMergeLevel2,
  timeout: null,
  debounce: 100,
  debug: true,
}

const storagePersistConfig = {
  key: 'storage',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
  application: ApplicationReducer,
  market: MarketReducer,
  storage: StorageReducer,
})

export default rootReducer
