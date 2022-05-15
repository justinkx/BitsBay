import React from 'react'
import { Platform, UIManager } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Entry from 'navigation/RootNavigation'
import store, { persistor } from './src/store/index'
import ThemeContextProvider from './src/styles/ThemeProvider'

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar />
        <ThemeContextProvider>
          <Entry />
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  )
}
