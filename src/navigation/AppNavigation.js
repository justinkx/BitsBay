import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { APP } from './Navigation.constants'
import TabNavigator from './TabNavigation'

const Stack = createNativeStackNavigator()

const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
        headerHideShadow: true,
      }}
      name={APP}
      component={TabNavigator}
    />
  </Stack.Navigator>
)

export default AppNavigation
