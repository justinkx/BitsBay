import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { memo, useCallback } from 'react'
import { Entypo } from '@expo/vector-icons'
import _toLower from 'lodash/toLower'
import _includes from 'lodash/includes'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { withTheme } from '../../hoc/withTheme'
import CryptoIcon from '../Icons'
import { isFavPairSelector } from '../../store/selectors/storage.selector'
import {
  addToFavourites,
  removeFromFavourites,
} from '../../store/actions/storage.actions'

const CompactListItem = ({ item, layoutMode, theme }) => {
  const dispatch = useDispatch()

  const isFavourite = useSelector(
    (state) => isFavPairSelector(state)(item?.symbol),
    shallowEqual
  )

  const onToggleFav = useCallback(
    () =>
      dispatch(
        isFavourite
          ? removeFromFavourites(item?.symbol)
          : addToFavourites(item?.symbol)
      ),
    [isFavourite, item?.symbol, dispatch]
  )

  return (
    <View style={styles.container}>
      <View style={styles.layout1Container}>
        <View style={styles.layout1_coin}>
          <TouchableOpacity onPress={onToggleFav} style={styles.starButton}>
            <Entypo
              name='star'
              size={22}
              color={isFavourite ? theme.fav : theme.iconInActive}
            />
          </TouchableOpacity>
          <View style={styles.icon}>
            {/* <CryptoIcon
              name={_toLower(item?.name)}
              size={25}
              style={styles.icon}
            /> */}
          </View>
          <Text style={[styles.name, { color: theme.primary }]}>
            {item?.name}
          </Text>
        </View>
        <View style={styles.layout1_price}>
          <Text style={[styles.price, { color: theme.primary }]}>
            $
            {item?.price}
          </Text>
        </View>
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
  layout1_coin: { flexDirection: 'row', width: '30%' },
  layout1_price: { width: '30%' },
  layout1_change: {},
  starButton: { paddingRight: 10 },
  icon: { width: 25, height: 25 },
  name: { paddingLeft: 15, fontWeight: '600', fontSize: 15 },
  price: { fontSize: 14, fontWeight: '600' },
})
