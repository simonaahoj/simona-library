import { takeLatest } from 'redux-saga/effects'

import {
  ADD_BASKET,
  Book,
  REMOVE_BASKET,
  RemoveBasketAction,
  AddBasketAction,
} from '../../types'

function saveBasketBackToTheLocalStore(cartBooks: Book[]) {
  localStorage.setItem(`basket`, JSON.stringify(cartBooks))
}

function loadBasketFromLocalStore() {
  const basketString = localStorage.getItem(`basket`)
  let basketObject: Book[] = []
  if (basketString !== null) {
    basketObject = JSON.parse(basketString)
  }
  return basketObject
}

function addBookToLocalStore(newBookThatIWantToAdd: Book) {
  let basketBooks = loadBasketFromLocalStore()
  basketBooks.push(newBookThatIWantToAdd)
  saveBasketBackToTheLocalStore(basketBooks)
}

function* saveBookToBasket(action: AddBasketAction) {
  addBookToLocalStore(action.payload.books[0])
  yield
}

function removeBookFromLocalStore(bookThatIWantToRemove: Book) {
  let basketBooks = loadBasketFromLocalStore()
  basketBooks = basketBooks.filter(
    (bookInBasket) => bookInBasket.title !== bookThatIWantToRemove.title
  )
  saveBasketBackToTheLocalStore(basketBooks)
}

function* removeBookFromBasket(action: RemoveBasketAction) {
  yield removeBookFromLocalStore(action.payload.book)
}

export default [
  takeLatest(ADD_BASKET, saveBookToBasket),
  takeLatest(REMOVE_BASKET, removeBookFromBasket),
]
