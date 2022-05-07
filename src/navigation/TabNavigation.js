import React, { memo, useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

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
import { withTheme } from '../hoc/withTheme'

const Tab = createBottomTabNavigator()

function TabNavigator({ theme }) {
  const {
    marketOptions,
    tradeOptions,
    balanceOptions,
    nftOptions,
    accountOptions,
  } = useMemo(
    () => ({
      marketOptions: {
        title: '',
        tabBarLabel: 'Markets',
        tabBarIcon: ({ focused, size }) => (
          <AntDesign
            name="areachart"
            size={size}
            color={focused ? theme.iconActive : theme.iconInActive}
          />
        ),
      },
      tradeOptions: {
        title: '',
        tabBarLabel: 'Trade',
        tabBarIcon: ({ focused, size }) => (
          <MaterialCommunityIcons
            name="shopping"
            size={size}
            color={focused ? theme.iconActive : theme.iconInActive}
          />
        ),
      },
      balanceOptions: {
        title: '',
        tabBarLabel: 'Balance',
        tabBarIcon: ({ focused, size }) => (
          <AntDesign
            name="piechart"
            size={size}
            color={focused ? theme.iconActive : theme.iconInActive}
          />
        ),
      },
      nftOptions: {
        title: '',
        tabBarLabel: 'NFT',
        tabBarIcon: ({ focused, size }) => (
          <FontAwesome5
            name="photo-video"
            size={size}
            color={focused ? theme.iconActive : theme.iconInActive}
          />
        ),
      },
      accountOptions: {
        title: '',
        tabBarLabel: 'Account',
        tabBarIcon: ({ focused, size }) => (
          <MaterialCommunityIcons
            name="account-circle"
            size={size}
            color={focused ? theme.iconActive : theme.iconInActive}
          />
        ),
      },
    }),
    [theme]
  )

  return (
    <Tab.Navigator
      initialRouteName={MARKET_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: theme.iconActive,
        tabBarInactiveTintColor: theme.iconInActive,
      }}
    >
      <Tab.Screen
        options={marketOptions}
        name={MARKET_SCREEN}
        component={MarketScreen}
      />
      <Tab.Screen
        options={tradeOptions}
        name={TRADE_SCREEN}
        component={TradeScreen}
      />
      <Tab.Screen
        options={nftOptions}
        name={NFT_SCREEN}
        component={NftScreen}
      />
      <Tab.Screen
        options={balanceOptions}
        name={BALANCER_SCREEN}
        component={BalancesScreen}
      />
      <Tab.Screen
        options={accountOptions}
        name={ACCOUNT_SCREEN}
        component={AccountScreen}
      />
    </Tab.Navigator>
  )
}

export default memo(withTheme(TabNavigator))
