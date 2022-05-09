import { StyleSheet, View, TextInput } from 'react-native'
import React, { memo, useCallback } from 'react'
import { Ionicons } from '@expo/vector-icons'

import { withTheme } from '../hoc/withTheme'

const SearchBar = ({
  theme,
  setSearchValue = () => {},
  searchValue,
  inputStyle = {},
  containerStyle = {},
}) => {
  const onChange = useCallback(
    (value) => {
      setSearchValue(value)
    },
    [setSearchValue]
  )

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.secondary },
        containerStyle,
      ]}
    >
      <Ionicons name='md-search' size={16} color={theme.primary} />
      <TextInput
        value={searchValue}
        onChangeText={onChange}
        placeHolder="search"
        style={[styles.input, { color: theme.primary }, inputStyle]}
      />
    </View>
  )
}

export default memo(withTheme(SearchBar))

const styles = StyleSheet.create({
  container: {
    borderRadius: 17,
    height: 35,
    opacity: 0.5,
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
})
