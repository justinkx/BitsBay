import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React, { memo } from 'react'
import { Entypo } from '@expo/vector-icons'

import { withTheme } from '../../hoc/withTheme'

const CompactListItem = ({ item, layoutMode, theme }) => {
  return (
    <View style={styles.container}>
      <View style={styles.layout1Container}>
        <View style={styles.layout1_coin}>
          <TouchableOpacity style={styles.starButton}>
            <Entypo name='star' size={24} color={theme.iconActive} />
          </TouchableOpacity>
          <Image source={{ uri: item?.logo }} style={styles.icon} />
        </View>
        <View style={styles.layout1_price} />
        <View style={styles.layout1_change} />
      </View>
    </View>
  )
}

export default memo(withTheme(CompactListItem))

const styles = StyleSheet.create({
  container: { flex: 1 },
  layout1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  layout1_coin: {},
  layout1_price: {},
  layout1_change: {},
  starButton: { paddingRight: 10 },
  icon: { width: 25, height: 25 },
})
