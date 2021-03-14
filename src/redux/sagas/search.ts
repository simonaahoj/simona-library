import { put, takeLatest } from 'redux-saga/effects'

import { SEARCH, CHANGE_SEARCH, SearchAction } from '../../types'

function* doSearch(action: SearchAction) {
  yield put({ type: CHANGE_SEARCH, payload: action.payload })
}

export default [takeLatest(SEARCH, doSearch)]
