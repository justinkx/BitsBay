import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const CompactListItem = ({ item }) => {
  return (
    <View>
      <Text>CompactListItem</Text>
    </View>
  )
}

export default memo(CompactListItem)

const styles = StyleSheet.create({})
