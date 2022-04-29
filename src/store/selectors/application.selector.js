import { createSelector } from 'reselect'

const getReducer = (state) => state.application

const netStateNode = createSelector(
  getReducer,
  (application) => application.netState || {}
)
const socketNode = createSelector(
  getReducer,
  (application) => application.socket || {}
)

export const isInternetSelector = createSelector(
  netStateNode,
  (netInfo = {}) => netInfo?.isInternetReachable || false
)

export const getAppState = createSelector(
  getReducer,
  (application) => application.appState || 'background'
)

export const isAppActive = createSelector(
  getReducer,
  (application) => application.appState === 'active' || false
)

export const isSocketLiveSelector = createSelector(
  socketNode,
  (socket) => socket.isConnected || false
)

export const isSocketClosedSelector = createSelector(
  socketNode,
  (socket) => socket.isClosed
)
