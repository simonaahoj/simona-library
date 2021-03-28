import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RemoveButton from '../components/RemoveButton'

import { borrowBooks } from '../redux/actions'
import { AppState } from '../types'

import './BasketPage.css'

export default function Basket() {
  const basketState = useSelector((state: AppState) => state.basketState)
  const dispatch = useDispatch()

  function handleBorrow() {
    dispatch(borrowBooks(basketState.books))
  }

  return (
    <>
      {basketState.books.map((book) => (
        <div key={book._id}>
          <ul>
            <li className="basket-list-item">
              <div className="remove-Button">
                <RemoveButton book={book} />
              </div>
              <img src={book?.imgUrl} className="book" alt="book" />
              <div id="title-book">
                {' '}
                Book:
                <br />
                {book?.title}
              </div>
              <br />
            </li>
          </ul>
        </div>
      ))}
      <Button id="button-borrow" size="small" onClick={handleBorrow}>
        Borrow
      </Button>
      <a href={`/`}>
        <Button id="button-back" size="small">
          {' '}
          Back{' '}
        </Button>
      </a>
      <div />
      {basketState.books.length === 0 && <h2>EMPTY BASKET</h2>}
    </>
  )
}
