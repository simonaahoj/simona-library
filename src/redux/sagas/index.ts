import { all } from 'redux-saga/effects'

import productSagas from './product'
import uiSagas from './ui'
import booksSagas from './books'

export default function* rootSaga() {
  yield all([...productSagas, ...uiSagas, ...booksSagas])
}
