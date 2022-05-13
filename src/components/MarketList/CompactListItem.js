import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React, { memo, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import _toLower from 'lodash/toLower'
import _includes from 'lodash/includes'

import { withTheme } from '../../hoc/withTheme'
import { COINS } from '../../helpers/AssetList'
import CryptoIcon from '../Icons'

const CompactListItem = ({ item, layoutMode, theme }) => {
  return (
    <View style={styles.container}>
      <View style={styles.layout1Container}>
        <View style={styles.layout1_coin}>
          <TouchableOpacity style={styles.starButton}>
            <Entypo name='star' size={22} color={theme.iconActive} />
          </TouchableOpacity>
          <CryptoIcon
            name={_toLower(item?.name)}
            size={25}
            style={styles.icon}
          />
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
  layout1_coin: { flexDirection: 'row' },
  layout1_price: {},
  layout1_change: {},
  starButton: { paddingRight: 10 },
  icon: { width: 25, height: 25 },
})
