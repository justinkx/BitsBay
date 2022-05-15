import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import SearchBar from '../SearchBar'
import { withTheme } from '../../hoc/withTheme'

const ListHeader = ({
  searchValue,
  setSearchValue,
  layoutMode,
  setMode,
  theme,
}) => {
  return (
    <View style={styles.container}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <View style={styles.gridView}>
        <TouchableOpacity style={styles.button} onPress={() => setMode(0)}>
          <MaterialCommunityIcons
            name='equal'
            size={20}
            color={layoutMode === 0 ? theme.iconActive : theme.iconInActive}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setMode(1)}>
          <FontAwesome5
            name='equals'
            size={20}
            color={layoutMode === 1 ? theme.iconActive : theme.iconInActive}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setMode(2)}>
          <Ionicons
            name='ios-grid'
            size={20}
            color={layoutMode === 2 ? theme.iconActive : theme.iconInActive}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(withTheme(ListHeader))

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  gridView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 4,
  },
  button: {
    padding: 2,
  },
})
