import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthors } from '../../redux/actions'
import { AppState } from '../../types'

export default function AuthorView({ idAuthor }: { idAuthor: string }) {
  const dispatch = useDispatch()
  const authorsState = useSelector((state: AppState) => state.authors) || {}
  if (authorsState.authors?.length === 0) {
    dispatch(fetchAuthors())
  }

  const author = useSelector((state: AppState) =>
    state.authors.authors.find((author) => author._id === idAuthor)
  )
  return (
    <>
      {author?.firstName} {author?.lastName}
    </>
  )
}
