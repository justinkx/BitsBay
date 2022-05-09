import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

const MarketList = ({ tag, isFav, isAll }) => {
  return (
    <View>
      <Text>MarketList</Text>
    </View>
  )
}

export default memo(MarketList)

const styles = StyleSheet.create({})
