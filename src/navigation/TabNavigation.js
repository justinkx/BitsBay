import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

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
    <Tab.Navigator
      initialRouteName={MARKET_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: '#0ebef3',
        tabBarInactiveTintColor: '#70839d',
      }}
    >
      <Tab.Screen
        options={{
          title: '',
          tabBarLabel: 'Markets',
          tabBarIcon: ({ focused, size }) => (
            <AntDesign
              name='areachart'
              size={size}
              color={focused ? '#0ebef3' : '#70839d'}
            />
          ),
        }}
        name={MARKET_SCREEN}
        component={MarketScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarLabel: 'Trade',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name='shopping'
              size={size}
              color={focused ? '#0ebef3' : '#70839d'}
            />
          ),
        }}
        name={TRADE_SCREEN}
        component={TradeScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarLabel: 'NFT',
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome5
              name='photo-video'
              size={size}
              color={focused ? '#0ebef3' : '#70839d'}
            />
          ),
        }}
        name={NFT_SCREEN}
        component={NftScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarLabel: 'Balance',
          tabBarIcon: ({ focused, size }) => (
            <AntDesign
              name='piechart'
              size={size}
              color={focused ? '#0ebef3' : '#70839d'}
            />
          ),
        }}
        name={BALANCER_SCREEN}
        component={BalancesScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name='account-circle'
              size={size}
              color={focused ? '#0ebef3' : '#70839d'}
            />
          ),
        }}
        name={ACCOUNT_SCREEN}
        component={AccountScreen}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
