import React from 'react'

import { AppState } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthors, fetchBooks } from '../../redux/actions'
import BookView from '../BookView'

export default function Books() {
  const dispatch = useDispatch()
  const searchState = useSelector((state: AppState) => state.searchState)
  const authorsState = useSelector((state: AppState) => state.authors) || {}
  if (authorsState.authors?.length === 0) {
    dispatch(fetchAuthors())
  }
  const booksState = useSelector((state: AppState) => state.books) || {}
  if (booksState.books?.length === 0) {
    dispatch(fetchBooks())
  }
  return (
    <>
      {booksState.books
        ?.filter((book) => {
          let author = authorsState.authors.find(
            (author) => author._id === book.idAuthor
          )

          return (
            book.title
              .toLowerCase()
              .indexOf(searchState.filter.toLowerCase()) >= 0 ||
            book.description
              .toLowerCase()
              .indexOf(searchState.filter.toLowerCase()) >= 0 ||
            (author?.firstName || '' + author?.lastName)
              .toLowerCase()
              .indexOf(searchState.filter.toLowerCase()) >= 0
          )
        })
        .map((b) => (
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
            description={b.description}
            copy={b.copy}
          />
        ))}
    </>
  )
}
