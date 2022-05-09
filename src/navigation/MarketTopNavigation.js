import React, { memo, useCallback, useMemo } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import MarketList from 'screens/Markets/MarketList'
import { Tags } from 'helpers/Constants'
import { withTheme } from '../hoc/withTheme'

const Tab = createMaterialTopTabNavigator()

function MarketTopTabs({ theme }) {
  const renderScreen = useCallback(({ tag, display }) => {
    const renderChildren = () => <MarketList tag={tag} key={display} />

    /* eslint-disable react/no-children-prop */
    return (
      <Tab.Screen
        options={{ title: display }}
        key={display}
        name={tag}
        children={renderChildren}
      />
    )
  }, [])

  const navigatorTabOptions = useMemo(
    () => ({
      tabBarActiveTintColor: theme.primary,
      tabBarIndicatorStyle: {
        backgroundColor: theme.iconActive,
      },
      tabBarInactiveTintColor: theme.iconInActive,
      tabBarStyle: {
        backgroundColor: theme.backgroundColor,
        height: 40,
        justifyContent: 'space-around',
      },
      tabBarItemStyle: {
        width: 100,
        height: 40,
        padding: 0,
      },
      tabBarLabelStyle: {},
      tabBarScrollEnabled: true,
      tabBarBounces: true,
    }),
    [theme]
  )

  return (
    <Tab.Navigator
      screenOptions={navigatorTabOptions}
      sceneContainerStyle={{ backgroundColor: theme.backgroundColor }}
      backBehavior="none"
    >
      {Tags.map(renderScreen)}
    </Tab.Navigator>
  )
}

export default memo(withTheme(MarketTopTabs))
