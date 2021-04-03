import { put, takeLatest } from 'redux-saga/effects'

import {
  BORROW_BOOKS,
  BorrowBooksAction,
  FetchBorrowedBookAction,
  FETCH_BORROWED_BOOK,
  BorrowedBook,
  BorrowDeleteBookAction,
  BORROW_DELETE_BOOK,
} from '../../types'
import { booksFetched, fetchBorrowed, removeBookfromBasket } from '../actions'
const { REACT_APP_BACKEND_URL } = process.env

function* borrowBooksHandler(action: BorrowBooksAction) {
  const returnDate: Date = new Date()
  returnDate.setDate(returnDate.getDate() + 30)

  console.log(action.payload.books)

  for (let book of action.payload.books) {
    fetch(`${REACT_APP_BACKEND_URL}/api/v1/borrowedBooks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({
        idBook: book._id,
        idUser: 0,
        borrowDate: new Date(),
        returnDate: returnDate,
      }),
    })

    yield put(removeBookfromBasket(book))
  }
}

async function fetchBorrowedBook() {
  if (localStorage.getItem('token') === null) {
    return []
  }
  const result = await fetch(`${REACT_APP_BACKEND_URL}/api/v1/borrowedBooks`, {
    headers: new Headers({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  })
  const borrowedBookAsJson = await result.json()
  return borrowedBookAsJson
}

function* fetchBorrowedBookHandler(action: FetchBorrowedBookAction) {
  console.log("I'm fetching all the borrow books")
  const borrowedBooks: BorrowedBook[] = yield fetchBorrowedBook()
  yield put(booksFetched(borrowedBooks))
}

async function asyncBorrowDeleteBook(action: BorrowDeleteBookAction) {
  let id = action.payload.borrowbook._id
  await fetch(`${REACT_APP_BACKEND_URL}/api/v1/borrowedbooks/${id}`, {
    headers: new Headers({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
    method: 'DELETE',
  })
}

function* borrowdeleteBook(action: BorrowDeleteBookAction) {
  console.log('I am deleting')
  asyncBorrowDeleteBook(action)
  yield put(fetchBorrowed())
}

export default [
  takeLatest(BORROW_BOOKS, borrowBooksHandler),
  takeLatest(FETCH_BORROWED_BOOK, fetchBorrowedBookHandler),
  takeLatest(BORROW_DELETE_BOOK, borrowdeleteBook),
]
