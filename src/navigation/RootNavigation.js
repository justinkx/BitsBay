import React, { useMemo } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigation from './AppNavigation'
import { withTheme } from '../hoc/withTheme'

export const navigationRef = React.createRef(null)

function Entry({ theme }) {
  const appTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme.backgroundColor,
        card: theme.backgroundColor,
      },
    }),
    [theme]
  )

  return (
    <NavigationContainer ref={navigationRef} theme={appTheme}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default withTheme(Entry)
