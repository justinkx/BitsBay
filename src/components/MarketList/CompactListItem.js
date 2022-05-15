import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { memo, useCallback, useMemo } from 'react'
import { Entypo } from '@expo/vector-icons'
import _toLower from 'lodash/toLower'
import _includes from 'lodash/includes'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { withTheme } from '../../hoc/withTheme'
import CryptoIcon from '../Icons'
import { isFavPairSelector } from '../../store/selectors/storage.selector'
import { getAssetBySymbol } from '../../store/selectors/market.selector'
import {
  addToFavourites,
  removeFromFavourites,
} from '../../store/actions/storage.actions'
import TickerPrice from './TickerPrice'
import Change42Hr from './Change42Hr'

const CompactListItem = ({ symbol = 'BTCBUSD', layoutMode, theme }) => {
  const dispatch = useDispatch()
  const isFavourite = useSelector(
    (state) => isFavPairSelector(state)(symbol),
    shallowEqual
  )

  const item = useSelector(
    (state) => getAssetBySymbol(state)(symbol),
    shallowEqual
  )

  const onToggleFav = useCallback(
    () =>
      dispatch(
        isFavourite ? removeFromFavourites(symbol) : addToFavourites(symbol)
      ),
    [isFavourite, symbol, dispatch]
  )

  const closePrice = useMemo(() => {
    const price = parseFloat(item?.lastPrice || item?.price)
    if (!price) return 0
    if (price < 1) return price.toFixed(6)
    if (price < 9) return price.toFixed(6)
    if (price < 99) return price.toFixed(5)
    if (price < 999) return price.toFixed(4)
    if (price < 9999) return price.toFixed(3)
    return price.toFixed(2)
  }, [item?.lastPrice])

  return (
    <View style={styles.container}>
      <View
        style={[
          layoutMode === 0 && [
            styles.layout1Container,
            { borderBottomColor: theme.iconInActive },
          ],
          layoutMode === 1 && [
            styles.layout2Container,
            {
              backgroundColor: theme.tickerCard,
            },
          ],
          layoutMode === 2 && [
            styles.layout3Container,
            {
              backgroundColor: theme.tickerCard,
            },
          ],
        ]}
      >
        <View
          style={[styles.layout1_coin, layoutMode === 2 && styles.layout2_coin]}
        >
          {layoutMode !== 2 && (
            <TouchableOpacity onPress={onToggleFav} style={styles.starButton}>
              <Entypo
                name='star'
                size={22}
                color={isFavourite ? theme.fav : theme.iconInActive}
              />
            </TouchableOpacity>
          )}
          {layoutMode !== 2 && (
            <View style={styles.icon}>
              <CryptoIcon
                name={_toLower(item?.name)}
                size={25}
                style={styles.icon}
              />
            </View>
          )}
          {layoutMode !== 2 && (
            <Text style={[styles.name, { color: theme.primary }]}>
              {item?.name || item?.symbol}
            </Text>
          )}
          {layoutMode === 2 && (
            <>
              <View style={styles.icon}>
                <CryptoIcon
                  name={_toLower(item?.name)}
                  size={25}
                  style={styles.icon}
                />
              </View>
              <Text style={[styles.name, { color: theme.primary }]}>
                {item?.name || item?.symbol}
              </Text>
            </>
          )}
        </View>
        {layoutMode === 0 && (
          <View style={styles.layout1_price}>
            <TickerPrice
              titleStyle={{ color: theme.secondary }}
              closePrice={closePrice}
              theme={theme}
            />
          </View>
        )}
        <View
          style={[
            layoutMode === 0 && [styles.layout1_change],
            layoutMode === 1 && [styles.layout2_change],
            layoutMode === 2 && [styles.layout3_change],
          ]}
        >
          {[1, 2].includes(layoutMode) && (
            <Text style={[styles.price, { color: theme.primary }]}>
              {closePrice}
            </Text>
          )}
          <Change42Hr
            priceChangePercentage={parseFloat(
              item?.priceChangePercentage
            ).toFixed(2)}
            theme={theme}
            showBorder={layoutMode === 0}
            containerStyle={layoutMode === 2 && styles.layout2Change24}
          />
        </View>
        {layoutMode === 2 && (
          <View style={styles.layout3Star}>
            <TouchableOpacity onPress={onToggleFav} style={styles.starButton}>
              <Entypo
                name='star'
                size={22}
                color={isFavourite ? theme.fav : theme.iconInActive}
              />
            </TouchableOpacity>
          </View>
        )}
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
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  layout1_coin: {
    flexDirection: 'row',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  layout2_coin: {
    width: '100%',
  },
  layout1_price: {
    width: '30%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  layout1_change: {},
  starButton: { paddingRight: 10 },
  icon: { width: 25, height: 25 },
  name: { paddingLeft: 15, fontWeight: '600', fontSize: 15 },
  layout2Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  price: { fontSize: 13, marginBottom: 6 },
  layout2_change: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  layout3Container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 4,
    borderRadius: 4,
    padding: 6,
  },
  layout3_change: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
  },
  layout3Star: {
    width: '100%',
  },
  layout2Change24: {
    paddingHorizontal: 0,
    justifyContent: 'flex-end',
  },
})
