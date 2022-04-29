import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ThemeContextProvider from 'styles/ThemeProvider'

export const navigationRef = React.createRef(null)

import AppNavigation from './AppNavigation'

export default Entry = () => {
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
