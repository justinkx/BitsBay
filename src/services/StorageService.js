import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const THEME_KEY = 'theme'

const setTheme = (id) => {
  AsyncStorage.setItem(THEME_KEY, id)
}

const getTheme = async () => {
  try {
    const themeId = await AsyncStorage.getItem(THEME_KEY)
    return themeId || 'dark'
  } catch (error) {
    throw error
  }
}

const setStorageItem = (key, value) => AsyncStorage.setItem(key, value)

const getStorageItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value ? value : null
  } catch (error) {
    throw error
  }
}

export { setTheme, getTheme, setStorageItem, getStorageItem }
