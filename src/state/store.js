import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ducks from 'state/ducks'
import sagas from 'state/sagas'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default function makeStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(ducks, composeEnhancers(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(sagas)

  return store
}
