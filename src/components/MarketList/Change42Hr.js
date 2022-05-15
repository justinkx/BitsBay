import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useRef, useMemo } from 'react'
import { AntDesign } from '@expo/vector-icons'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import _isNaN from 'lodash/isNaN'

const Change42Hr = ({
  priceChangePercentage,
  theme,
  showBorder = true,
  containerStyle = {},
}) => {
  const lastPriceChangeRef = useRef(0)

  const {
    lastPriceChangeColor = theme.tradeGreen,
    isHigh = null,
    showIcon = true,
  } = useMemo(() => {
    const priceChangeColor = {
      lastPriceChangeColor: theme.tradeGreen,
      isHigh: null,
      showIcon: true,
    }
    if (priceChangePercentage > lastPriceChangeRef.current) {
      priceChangeColor.lastPriceChangeColor = theme.tradeGreen
      priceChangeColor.isHigh = true
    } else if (priceChangePercentage < lastPriceChangeRef.current) {
      priceChangeColor.lastPriceChangeColor = theme.tradeRed
      priceChangeColor.isHigh = false
    } else {
      priceChangeColor.showIcon = false
    }
    lastPriceChangeRef.current = priceChangePercentage
    return priceChangeColor
  }, [priceChangePercentage])

  const animatedBorder = useAnimatedStyle(() => {
    return { borderColor: lastPriceChangeColor, borderWidth: 1 }
  }, [lastPriceChangeColor])

  const animatedText = useAnimatedStyle(() => {
    return { color: lastPriceChangeColor }
  }, [lastPriceChangeColor])

  if (_isNaN(priceChangePercentage)) return null

  return (
    <Animated.View
      style={[styles.container, showBorder && animatedBorder, containerStyle]}
    >
      {showIcon && (
        <AntDesign
          style={styles.priceIcon}
          name={isHigh ? 'caretup' : 'caretdown'}
          size={8}
          color={lastPriceChangeColor}
        />
      )}
      <Animated.Text style={[styles.priceChange, animatedText]}>
        {priceChangePercentage}
        %
      </Animated.Text>
    </Animated.View>
  )
}

export default memo(Change42Hr)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 60,
    height: 25,
    paddingHorizontal: 5,
  },
  priceChange: {
    fontSize: 12,
    fontVariant: ['tabular-nums'],
  },
  priceIcon: {
    marginRight: 2,
  },
})
