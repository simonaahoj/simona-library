import { put, takeLatest } from 'redux-saga/effects'

import { FETCH_BOOKS, FetchBooksAction } from '../../types'
import { addBooks } from '../actions'

async function fetchBooks() {
  const result = await fetch(' http://localhost:5000/api/v1/books')
  const booksAsJson = await result.json()
  return booksAsJson
}

function* fetchAllTheBooks(action: FetchBooksAction) {
  console.log("I'm fetching all the books")
  const books = yield fetchBooks()
  yield put(addBooks(books))
}

export default [takeLatest(FETCH_BOOKS, fetchAllTheBooks)]
