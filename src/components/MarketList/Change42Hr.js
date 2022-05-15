import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useRef, useMemo } from 'react'
import { AntDesign } from '@expo/vector-icons'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

const Change42Hr = ({ priceChangePercentage, theme }) => {
  const lastPriceChangeRef = useRef(0)

  const {
    lastPriceChangeColor = theme.secondary,
    isHigh = null,
    showIcon = true,
  } = useMemo(() => {
    const priceChangeColor = {
      lastPriceChangeColor: theme.secondary,
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
    return { borderColor: lastPriceChangeColor }
  }, [lastPriceChangeColor])

  const animatedText = useAnimatedStyle(() => {
    return { color: lastPriceChangeColor }
  }, [lastPriceChangeColor])

  return (
    <Animated.View style={[styles.container, animatedBorder]}>
      {!!priceChangePercentage && (
        <>
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
        </>
      )}
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
    borderWidth: 1,
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
