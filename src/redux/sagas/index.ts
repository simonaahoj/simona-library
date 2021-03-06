import { all } from 'redux-saga/effects'

import productSagas from './product'
import uiSagas from './ui'
import booksSagas from './books'
import authorsSagas from './author'
import userSagas from './user'

export default function* rootSaga() {
  yield all([
    ...productSagas,
    ...uiSagas,
    ...booksSagas,
    ...authorsSagas,
    ...uiSagas,
    ...userSagas,
  ])
}
