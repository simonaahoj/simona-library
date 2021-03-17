import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BorrowDeleteButton from '../components/BorrowDeleteButton'

import { fetchBooks, fetchBorrowed } from '../redux/actions'

import { AppState } from '../types'

import './MyBooks.css'

export default function MyBooks() {
  const dispatch = useDispatch()

  const borrowState =
    useSelector((state: AppState) => state.borrowBookState) || {}

  if (borrowState.borrowedBooks === undefined) {
    dispatch(fetchBorrowed())
  }

  const booksState = useSelector((state: AppState) => state.books) || {}
  if (booksState.books?.length === 0) {
    dispatch(fetchBooks())
  }

  const getBook = (idBook: String) =>
    booksState.books.find((book) => book._id === idBook)

  return (
    <>
      <h1>My Borrowed Books</h1>
      {borrowState.borrowedBooks?.map((borrowedBook) => (
        <div key={borrowedBook._id}>
          <ul>
            <li className="borrow-book-list">
              <div id="title-book">{getBook(borrowedBook.idBook)?.title}</div>
              <img
                src={getBook(borrowedBook.idBook)?.imgUrl}
                className="book"
                alt="book"
              />
              <div id="borrow-date">
                Borrow Date:
                <br />
                {borrowedBook.borrowDate}
                <br />
                <br />
                Return Date:
                <br />
                {borrowedBook.returnDate}
              </div>
              <BorrowDeleteButton borrowBook={borrowedBook} />
            </li>
          </ul>
        </div>
      ))}

      <div />
      <a href={`/`}>
        <Button id="button-back" size="small">
          {' '}
          Back{' '}
        </Button>
      </a>
      <div />
      {borrowState.borrowedBooks?.length === 0 && (
        <h2>You have no books home!</h2>
      )}
    </>
  )
}
