import {
  ADD_BASKET,
  AddBasketAction,
  Book,
  REMOVE_BASKET,
  RemoveBasketAction,
  ToggleBasketAction,
  TOGGLE_BASKET,
} from '../../types'

export function addBooktoBaket(book: Book): AddBasketAction {
  return {
    type: ADD_BASKET,
    payload: { books: [book] },
  }
}

export function removeBookfromBasket(book: Book): RemoveBasketAction {
  return {
    type: REMOVE_BASKET,
    payload: { book: book },
  }
}

export function toggleBasket(): ToggleBasketAction {
  return { type: TOGGLE_BASKET, payload: {} }
}
