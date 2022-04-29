import { UPDATE_APP_STATE, UPDATE_NET_STATE } from 'actions/application.actions'

const initialState = {
  appState: 'background',
  netState: {
    isConnected: true,
  },
}

export default function ApplicationReducer(state = initialState, action) {
  const { appState = 'active', netState } = action
  switch (action.type) {
    case UPDATE_APP_STATE:
      return { ...state, appState }
    case UPDATE_NET_STATE:
      return { ...state, netState }
    default:
      return { ...state }
  }
}
