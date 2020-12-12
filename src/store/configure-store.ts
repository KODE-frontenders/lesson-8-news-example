import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
}

export const configureStore = () => {
  // redux-devtools
  const composeEnhancers = composeWithDevTools({})
  // redux-saga
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  // redux-persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  // redux persist
  const persistor = persistStore(store)

  // redux-saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
