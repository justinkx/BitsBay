import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Entry from 'navigation/RootNavigation'
import store, { persistor } from './src/store/index'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar />
        <Entry />
      </PersistGate>
    </Provider>
  )
}
