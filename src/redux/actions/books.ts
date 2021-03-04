import {
  FETCH_BOOKS,
  BookAction,
  ADD_BOOKS,
  AddBooksAction,
  Book,
} from '../../types'

export function fetchBooks(): BookAction {
  return { type: FETCH_BOOKS }
}

export function addBooks(books: Book[]): AddBooksAction {
  return {
    type: ADD_BOOKS,
    payload: { books: books },
  }
}
