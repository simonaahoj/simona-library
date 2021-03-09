import { put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_BOOKS,
  FetchBooksAction,
  DeleteBookAction,
  DELETE_BOOK,
} from '../../types'
import { addBooks, fetchBooks as ftch } from '../actions'

async function fetchBooks() {
  const result = await fetch('http://localhost:5000/api/v1/books')
  const booksAsJson = await result.json()
  return booksAsJson
}

function* fetchAllTheBooks(action: FetchBooksAction) {
  console.log("I'm fetching all the books")
  const books = yield fetchBooks()
  yield put(addBooks(books))
}

async function asyncDeleteBook(action: DeleteBookAction) {
  let id = action.payload.book._id
  await fetch(`http://localhost:5000/api/v1/books/${id}`, {
    method: 'DELETE',
  })
}

function* deleteBook(action: DeleteBookAction) {
  asyncDeleteBook(action)
  yield put(ftch())
}

export default [
  takeLatest(FETCH_BOOKS, fetchAllTheBooks),
  takeLatest(DELETE_BOOK, deleteBook),
]
