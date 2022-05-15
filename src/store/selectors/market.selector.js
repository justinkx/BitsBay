import { createSelector } from 'reselect'
import _includes from 'lodash/includes'
import _values from 'lodash/values'
import _filter from 'lodash/filter'
import _flow from 'lodash/flow'
import _pick from 'lodash/pick'
import _toLower from 'lodash/toLower'
import _keys from 'lodash/keys'
import _pickBy from 'lodash/pickBy'

import { favouritePairSelector } from './storage.selector'

const assetReducer = (state) => state.market

const isValid = ({ asset }) => asset?.closePrice || asset?.price

const filterBySearchValue = ({ asset = {}, searchValue = '' }) =>
  _toLower(asset?.symbol)?.includes(_toLower(searchValue)) ||
  _toLower(asset?.fullName)?.includes(_toLower(searchValue))

const filterByTag = ({ asset = {}, tag = '' }) =>
  tag === 'all' ? true : _includes(asset?.tags, tag)

export const favouriteAssetSelector = createSelector(
  [assetReducer, favouritePairSelector],
  (market, fav = []) =>
    (searchValue = '') => {
      const { assets = {} } = market

      const favAssets = _pick(assets, fav) || {}
      return (
        _keys(
          _pickBy(
            favAssets,
            (asset) =>
              isValid({ asset }) && filterBySearchValue({ asset, searchValue })
          )
        ) || []
      )
    }
)

export const marketAssetSelector = createSelector(
  assetReducer,
  (market) =>
    (searchValue = '', tag = '') => {
      const { assets = {} } = market

      const filteredAssets = _flow([
        (_assets) =>
          _pickBy(
            _assets,
            (asset) =>
              isValid({ asset }) &&
              filterBySearchValue({ asset, searchValue }) &&
              filterByTag({ asset, tag })
          ),
        _keys,
      ])

      return filteredAssets(assets)
    }
)

export const getAssetKeysSelector = createSelector(assetReducer, (market) => {
  const { assets = {} } = market
  return _keys(assets)
})

export const getAssetSelector = createSelector(assetReducer, (market) => {
  const { assets = {} } = market
  return assets
})

export const getAssetBySymbol =
  (state) =>
    (symbol = 'BTCBUSD') => {
      const market = assetReducer(state)
      const { assets = {} } = market
      return assets[symbol]
    }
