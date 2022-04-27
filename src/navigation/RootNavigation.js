import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

export const navigationRef = React.createRef(null)

import AppNavigation from './AppNavigation'

export default Entry = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigation />
    </NavigationContainer>
  )
}
