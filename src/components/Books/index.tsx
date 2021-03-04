import React from 'react'

import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../redux/actions'
import BookView from '../BookView'

export default function Books() {
  const dispatch = useDispatch()
  const booksState = useSelector((state: AppState) => state.books) || {}
  if (booksState.books?.length === 0) {
    dispatch(fetchBooks())
  }
  return (
    <>
      {booksState.books?.map((b) => (
        <BookView
          key={b.title}
          _id={b._id}
          title={b.title}
          published={b.published}
          categories={b.categories}
          pages={b.pages}
          imgUrl={b.imgUrl}
          idAuthor={b.idAuthor}
          ISBN={b.ISBN}
        />
      ))}
    </>
  )
}
