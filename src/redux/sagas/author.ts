import { put, takeLatest } from 'redux-saga/effects'

import { FETCH_AUTHORS, FetchAuthorsAction } from '../../types'
import { addAuthors } from '../actions'

async function fetchAuthors() {
  const result = await fetch(' http://localhost:5000/api/v1/authors')
  const authorsAsJson = await result.json()
  return authorsAsJson
}

function* fetchAllTheAuthors(action: FetchAuthorsAction) {
  console.log("I'm fetching all the authors")
  const authors = yield fetchAuthors()
  yield put(addAuthors(authors))
}

export default [takeLatest(FETCH_AUTHORS, fetchAllTheAuthors)]
