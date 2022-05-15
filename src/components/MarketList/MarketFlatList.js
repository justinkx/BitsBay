import { StyleSheet, FlatList, View } from 'react-native'
import React, { memo, useCallback } from 'react'

import CompactListItem from './CompactListItem'

const MarketFlatList = ({ assets, layoutMode }) => {
  const renderItem = useCallback(
    ({ item }) => <CompactListItem symbol={item} layoutMode={layoutMode} />,
    [layoutMode]
  )
  const keyExtractor = useCallback(
    (item) => `${layoutMode === '2' ? '#' : '_'}${item}`,
    [layoutMode]
  )

  return (
    <FlatList
      data={assets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.list}
      initialNumToRender={10}
      numColumns={layoutMode === 2 ? 2 : 1}
      key={layoutMode === 2 ? 2 : 1}
    />
  )
}

export default memo(MarketFlatList)

const styles = StyleSheet.create({
  list: { padding: 8 },
})
