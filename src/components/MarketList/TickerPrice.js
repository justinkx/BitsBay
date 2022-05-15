import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, memo, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'

const TickerPrice = ({
  closePrice,
  titleStyle = {},
  iconStyle = {},
  containerStyle = {},
  theme,
}) => {
  const lastPriceRef = useRef(0)

  const {
    lastPriceColor = theme.secondary,
    isHigh = null,
    showIcon = true,
  } = useMemo(() => {
    const priceColor = {
      lastPriceColor: theme.secondary,
      isHigh: null,
      showIcon: true,
    }
    if (closePrice > lastPriceRef.current) {
      priceColor.lastPriceColor = theme.tradeGreen
      priceColor.isHigh = true
    } else if (closePrice < lastPriceRef.current) {
      priceColor.lastPriceColor = theme.tradeRed
      priceColor.isHigh = false
    } else {
      priceColor.showIcon = false
    }
    lastPriceRef.current = closePrice
    return priceColor
  }, [closePrice])
  return (
    <View style={[styles.row, containerStyle]}>
      <Text
        style={[
          styles.title,
          titleStyle,
          {
            color: lastPriceColor,
          },
        ]}
      >
        $
        {closePrice}
      </Text>
      {showIcon && (
        <AntDesign
          style={[styles.priceIcon, iconStyle]}
          name={isHigh ? 'caretup' : 'caretdown'}
          size={16}
          color={lastPriceColor}
        />
      )}
    </View>
  )
}

export default memo(TickerPrice)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  priceIcon: {
    marginLeft: 3,
  },
})
