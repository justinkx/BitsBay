import { StyleSheet, FlatList, View } from 'react-native'
import React, { memo, useCallback } from 'react'

import CompactListItem from './CompactListItem'

const MarketFlatList = ({ assets, layoutMode, isFocused }) => {
  const renderItem = useCallback(
    ({ item }) => <CompactListItem item={item} layoutMode={layoutMode} />,
    [layoutMode]
  )
  const keyExtractor = useCallback(
    (item, index) => item.id || index.toString(),
    []
  )

  return (
    <FlatList
      data={assets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.list}
      initialNumToRender={10}
    />
  )
}

export default memo(MarketFlatList)

const styles = StyleSheet.create({
  list: { paddingVertical: 5 },
})
