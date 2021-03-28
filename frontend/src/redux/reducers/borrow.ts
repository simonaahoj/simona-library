import {
  BorrowActions,
  BorrowBookState,
  BORROWED_BOOKS_FETCHED,
  FETCH_BORROWED_BOOK,
} from '../../types'

export default function borrowBookState(
  state: BorrowBookState = {
    borrowedBooks: [],
  },
  action: BorrowActions
): BorrowBookState {
  switch (action.type) {
  case FETCH_BORROWED_BOOK: {
    console.log('FETCH Borrow books ACTION TRIGGERED')
    return state
  }
  case BORROWED_BOOKS_FETCHED: {
    console.log('FETCH Borrow books ACTION TRIGGERED')
    return {
      ...state,
      borrowedBooks: action.payload.borrowedbooks,
    }
  }
  default:
    return state
  }
}
