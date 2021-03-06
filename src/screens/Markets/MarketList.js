import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import {
  marketAssetSelector,
  favouriteAssetSelector,
} from '../../store/selectors/market.selector'
import ListHeader from '../../components/MarketList/ListHeader'
import MarketFlatList from '../../components/MarketList/MarketFlatList'

const MarketList = ({ tag, isFav, isAll }) => {
  const [searchValue, setSearchValue] = useState('')
  const [layoutMode, setMode] = useState(0)

  const isFocused = useIsFocused()

  const assets =
    tag === 'favourites'
      ? useSelector(
        (state) => favouriteAssetSelector(state)(searchValue),
        shallowEqual
      )
      : useSelector(
        (state) => marketAssetSelector(state)(searchValue, tag),
        shallowEqual
      )
  return (
    <View style={styles.container}>
      <ListHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        layoutMode={layoutMode}
        setMode={setMode}
      />
      <MarketFlatList
        isFocused={isFocused}
        assets={assets}
        layoutMode={layoutMode}
      />
    </View>
  )
}

export default memo(MarketList)

const styles = StyleSheet.create({
  container: { flex: 1 },
})
