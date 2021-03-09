import React from 'react'

import { useDispatch } from 'react-redux'
import { removeBookfromBasket } from '../../redux/actions/basket'
import { Book } from '../../types'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export default function RemoveButton({ book }: { book: Book }) {
  const dispatch = useDispatch()

  function hadndleRemoveButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    dispatch(removeBookfromBasket(book))
  }

  return (
    <div>
      <IconButton aria-label="delete" onClick={hadndleRemoveButton}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
