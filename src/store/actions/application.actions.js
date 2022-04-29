export const APPSTATE_CHANGE = 'change'
export const NET_STATE_CHANGE = 'net_state'

export const UPDATE_APP_STATE = 'UPDATE_APP_STATE'
export const UPDATE_DEEP_LINK = 'UPDATE_DEEP_LINK'
export const UPDATE_NET_STATE = 'UPDATE_NET_STATE'
export const APP_HAS_MOUNTED = 'APP_HAS_MOUNTED'
export const APP_IS_READY = 'APP_IS_READY'

export const updateAppState = (appState) => ({
  type: UPDATE_APP_STATE,
  appState,
})

export const updateNetState = (netState) => ({
  type: UPDATE_NET_STATE,
  netState,
})

export const applicationHasMounted = () => ({
  type: APP_HAS_MOUNTED,
})

export const applicationReady = () => ({ type: APP_IS_READY })
