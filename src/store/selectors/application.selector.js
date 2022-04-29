import { createSelector } from 'reselect'

const getReducer = (state) => state.application

const netStateNode = createSelector(
  getReducer,
  (application) => application.netState || {}
)

export const isInternetSelector = createSelector(
  netStateNode,
  (netInfo = {}) => netInfo?.isInternetReachable || false
)

export const getAppState = createSelector(
  getReducer,
  (application) => application.appState || 'background'
)
