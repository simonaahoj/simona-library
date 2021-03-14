import { takeLatest } from 'redux-saga/effects'

import { BORROW_BOOKS, BorrowBooksAction } from '../../types'

async function borrowBooksHandler(action: BorrowBooksAction) {
  const returnDate: Date = new Date()
  returnDate.setDate(returnDate.getDate() + 30)

  console.log(action.payload.books)

  for (let book of action.payload.books) {
    let result = await fetch('http://localhost:5000/api/v1/borrowedbooks', {
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
      //  }).then(() => {
      //      put(bookSuccsefulyBorrowed(book))
      //   }).catch(()=>{
    })
    result = await result.json()
  }
}

export default [takeLatest(BORROW_BOOKS, borrowBooksHandler)]
