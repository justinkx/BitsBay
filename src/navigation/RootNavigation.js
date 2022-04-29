import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ThemeContextProvider from 'styles/ThemeProvider'

import AppNavigation from './AppNavigation'

export const navigationRef = React.createRef(null)

export default function Entry() {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <ThemeContextProvider>
          <AppNavigation />
        </ThemeContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
