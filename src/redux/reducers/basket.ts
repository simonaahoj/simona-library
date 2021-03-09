import {
  BasketState,
  ADD_BASKET,
  BasketAction,
  TOGGLE_BASKET,
  REMOVE_BASKET,
} from '../../types'

export default function basketState(
  state: BasketState = {
    books: [],
    open: false,
  },
  action: BasketAction
): BasketState {
  switch (action.type) {
  case ADD_BASKET: {
    const newBooks = state.books.concat(action.payload.books)

    return {
      ...state,
      books: newBooks,
    }
  }

  case TOGGLE_BASKET: {
    return {
      ...state,
      open: !state.open,
    }
  }

  case REMOVE_BASKET: {
    return {
      ...state,
      books: state.books.filter(
        (inBasketBook) => inBasketBook?.title !== action.payload.book.title
      ),
    }
  }

  default:
    return state
  }
}
