import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'

import SearchBar from '../SearchBar'

const ListHeader = ({ searchValue, setSearchValue, layoutMode, setMode }) => {
  return (
    <View style={styles.container}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </View>
  )
}

export default memo(ListHeader)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
