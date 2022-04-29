import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { APP } from './Navigation.constants'
import TabNavigator from './TabNavigation'

const Stack = createStackNavigator()

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
