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
  lines = 1,
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
        placeHolder='search'
        style={[styles.input, { color: theme.primary }, inputStyle]}
        multiline={lines > 1}
        numberOfLines={lines}
        textAlignVertical={lines > 1 ? 'top' : 'auto'}
      />
    </View>
  )
}

export default memo(withTheme(SearchBar))

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 30,
    opacity: 0.5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
    fontSize: 15,
  },
})
