import { configureStore } from '@reduxjs/toolkit'
import { format } from 'date-fns'

import createSagaMiddleware from 'redux-saga'
import reduxWebsocket from '@giantmachines/redux-websocket'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

// Create the middleware instance.
const reduxWebsocketMiddleware = reduxWebsocket({
  reconnectOnClose: false,
  dateSerializer: (date) => format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
})

const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line max-len
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }).concat([sagaMiddleware, reduxWebsocketMiddleware]),
  devTools: true,
})
sagaMiddleware.run(rootSaga)
if (module.hot) {
  module.hot.accept(() => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./rootReducer').default
    store.replaceReducer(nextRootReducer)
  })
}
export default store
