import { put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_BOOKS,
  FetchBooksAction,
  DeleteBookAction,
  DELETE_BOOK,
  CREATE_BOOK,
  CreateBookAction,
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

async function createBook(action: CreateBookAction) {
  let formData = new FormData()
  formData.append('title', action.payload.book.title)
  formData.append('published', action.payload.book.published)
  formData.append('categories', action.payload.book.categories.join(' '))
  formData.append('imgUrl', action.payload.book.imgUrl)
  formData.append('idAuthor', action.payload.book.idAuthor)
  formData.append('pages', action.payload.book.pages)
  formData.append('ISBN', action.payload.book.ISBN)
  formData.append('description', action.payload.book.description)
  formData.append('copy', action.payload.book.copy)

  const result = await fetch('http://localhost:5000/api/v1/books', {
    method: 'POST',
    body: new URLSearchParams([...(formData as any)]),
  })
  const bookAsJson = await result.json()
  return bookAsJson
}

export default [
  takeLatest(FETCH_BOOKS, fetchAllTheBooks),
  takeLatest(DELETE_BOOK, deleteBook),
  takeLatest(CREATE_BOOK, createBook),
]
