import { BooksState, BookAction, FETCH_BOOKS, ADD_BOOKS } from '../../types'

export default function books(
  state: BooksState = {
    books: [],
  },
  action: BookAction
): BooksState {
  switch (action.type) {
  case FETCH_BOOKS: {
    console.log('FETCH Books ACTION TRIGGERED')
    return state
  }
  case ADD_BOOKS: {
    console.log('got the books')
    console.log(action.payload)
    return {
      ...state,
      books: action.payload.books,
    }
  }

  default:
    return state
  }
}
