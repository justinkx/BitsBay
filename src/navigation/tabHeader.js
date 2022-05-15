import { StyleSheet, Text, View, Image } from 'react-native'
import React, { memo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Icon from '../../assets/icon-transparent.png'

const TabHeader = ({ style, theme }) => {
  const { top } = useSafeAreaInsets()
  return (
    <View style={[style, styles.header, { paddingTop: top }]}>
      <Image resizeMode="cover" source={Icon} style={styles.icon} />
      <Text style={[styles.text, { color: theme.primary }]}>BitBay</Text>
    </View>
  )
}

export default memo(TabHeader)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 5,
    paddingBottom: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
