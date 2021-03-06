import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { APP } from './Navigation.constants'
import TabNavigator from './TabNavigation'

const Stack = createStackNavigator()

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          headerHideShadow: true,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name={APP}
        component={TabNavigator}
      />
    </Stack.Navigator>
  )
}
