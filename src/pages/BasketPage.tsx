import React from 'react'
import { useSelector } from 'react-redux'
import RemoveButton from '../components/RemoveButton'

import { AppState } from '../types'

export default function Basket() {
  const basketState = useSelector((state: AppState) => state.basketState)
  return (
    <>
      <div>
        <ul>
          {basketState.books.map((book) => (
            <li className="basket-list-item">
              <RemoveButton book={book} />
              <img src={book?.imgUrl} className="book" alt="book" />
              <div id="title-book">{book?.title}</div>
            </li>
          ))}
        </ul>
        {basketState.books.length === 0 && <h2>EMPTY BASKET</h2>}
      </div>
    </>
  )
}
