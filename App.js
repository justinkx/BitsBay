import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'

import Entry from 'navigation/RootNavigation'
import store from './src/store/index'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <Entry />
    </Provider>
  )
}
