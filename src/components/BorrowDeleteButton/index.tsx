import React from 'react'

import { useDispatch } from 'react-redux'
import { BorrowedBook } from '../../types'
import IconButton from '@material-ui/core/IconButton'
import { borrowdeleteBook } from '../../redux/actions'

export default function BorrowDeleteButton({
  borrowBook,
}: {
  borrowBook: BorrowedBook
}) {
  const dispatch = useDispatch()

  function hadndleBorrowDeleteButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    dispatch(borrowdeleteBook(borrowBook))
  }

  return (
    <div>
      <IconButton aria-label="delete" onClick={hadndleBorrowDeleteButton}>
        Return
      </IconButton>
    </div>
  )
}
