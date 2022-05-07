import { createSelector } from 'reselect'
import _includes from 'lodash/includes'
import _values from 'lodash/values'
import _filter from 'lodash/filter'
import _flow from 'lodash/flow'

import { favouritePairSelector } from './storage.selector'

const assetReducer = (state) => state.market

const filterBySearchValue = ({ asset = {}, searchValue = '' }) => asset?.symbol?.includes(searchValue) || asset?.fullName?.includes(searchValue)
const filterByTag = ({ asset = {}, tag = '' }) => _includes(asset?.tags, tag)

export const marketAssetSelector = createSelector(
  assetReducer,
  (market) => (searchValue = '', tag = '') => {
    const { assets = {} } = market

    const filteredAssets = _flow([
      _values,
      (assetValues) => _filter(assetValues, (asset) => {
        return (
          filterBySearchValue({ asset, searchValue })
              && filterByTag({ asset, tag })
        )
      }),
    ])

    return filteredAssets(assets)
  }
)
