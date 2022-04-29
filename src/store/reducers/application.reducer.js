import { AppState } from 'react-native'

import { UPDATE_APP_STATE, UPDATE_NET_STATE } from 'actions/application.actions'

const initialState = {
  appState: AppState.currentState,
  netState: {
    isConnected: true,
  },
  socket: {
    isConnected: false,
    isClosed: true,
    status: 'CLOSED',
  },
}

export default function ApplicationReducer(state = initialState, action) {
  const { appState = 'active', netState } = action
  switch (action.type) {
    case UPDATE_APP_STATE:
      return { ...state, appState }
    case UPDATE_NET_STATE:
      return { ...state, netState }
    case 'REDUX_WEBSOCKET::OPEN':
      /* eslint-disable no-case-declarations */
      const { meta } = action
      return {
        ...state,
        socket: {
          isConnected: true,
          isClosed: false,
          status: 'OPEN',
          meta,
        },
      }
    case 'REDUX_WEBSOCKET::DISCONNECT':
      return {
        ...state,
        socket: {
          isConnected: false,
          isClosed: false,
          status: 'DISCONNECT',
          meta,
        },
      }
    case 'REDUX_WEBSOCKET::CLOSED':
      return {
        ...state,
        socket: {
          isConnected: false,
          isClosed: true,
          status: 'CLOSED',
          meta,
        },
      }
    default:
      return { ...state }
  }
}
