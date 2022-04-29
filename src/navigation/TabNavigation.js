import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from 'screens/Account'
import BalancesScreen from 'screens/Balances'
import MarketScreen from 'screens/Markets'
import NftScreen from 'screens/NFT'
import TradeScreen from 'screens/Trade'

import {
  ACCOUNT_SCREEN,
  BALANCER_SCREEN,
  MARKET_SCREEN,
  NFT_SCREEN,
  TRADE_SCREEN,
} from './Navigation.constants'

const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={MARKET_SCREEN} component={MarketScreen} />
      <Tab.Screen name={TRADE_SCREEN} component={TradeScreen} />
      <Tab.Screen name={NFT_SCREEN} component={NftScreen} />
      <Tab.Screen name={BALANCER_SCREEN} component={BalancesScreen} />
      <Tab.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
