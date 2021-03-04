import React from 'react'

import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/actions'

export default function Books() {
  const dispatch = useDispatch()
  const booksState = useSelector((state: AppState) => state.books) || {}
  if (booksState.books?.length === 0) {
    dispatch(fetchBooks())
  }
  return (
    <ul>
      {booksState.books?.map((b) => (
        <li key={b.title}>{b.title}</li>
      ))}
    </ul>
  )
}
