import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'

import './Basket.css'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'

export default function Basket() {
  const basketState = useSelector((state: AppState) => state.basketState) || {
    books: [],
  }

  function hadleBasketCklick(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    window.location.href = '/basket'
  }
  let basketNumberHTML = <sup></sup>
  if (basketState.books.length > 0) {
    basketNumberHTML = <sup>{basketState.books.length}</sup>
  }
  return (
    <button
      type="button"
      className="close"
      id="button-navbar"
      aria-label="Close"
      onClick={hadleBasketCklick}
    >
      <h3>
        <LocalMallOutlinedIcon />
        {basketNumberHTML}
      </h3>
    </button>
  )
}
