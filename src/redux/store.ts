import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

function loadFromLocalStore(key: string, defaultValue: string) {
  return JSON.parse(localStorage.getItem(key) || defaultValue)
}

const initState: AppState = {
  product: {
    inCart: [],
  },
  ui: {
    dialogOpen: {},
  },
  books: {
    books: [],
  },
  authors: {
    authors: [],
  },
  loggedInUser: {
    user: undefined,
  },
  basketState: {
    books: loadFromLocalStore(`basket`, '[]'),
    open: false,
  },
  menuState: {
    open: false,
  },
  searchState: {
    filter: '',
  },
  borrowBookState: {
    borrowedBooks: undefined,
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
