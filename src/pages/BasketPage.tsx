import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RemoveButton from '../components/RemoveButton'

import { borrowBooks } from '../redux/actions'

import { AppState } from '../types'

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
          <li className="basket-list-item">
            <img src={book?.imgUrl} className="book" alt="book" />
          </li>
          <div id="title-book">{book?.title}</div>
          <RemoveButton book={book} />
        </div>
      ))}
      <button onClick={handleBorrow}>Borrow</button>
      <a href={`/`}>
        <Button size="small"> Back </Button>
      </a>
      <div />
      {basketState.books.length === 0 && <h2>EMPTY BASKET</h2>}
    </>
  )
}
