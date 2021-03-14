import {
  FETCH_BOOKS,
  BookAction,
  ADD_BOOKS,
  AddBooksAction,
  Book,
  DELETE_BOOK,
  DeleteBookAction,
  CREATE_BOOK,
  CreateBookAction,
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

export function deleteBook(book: Book): DeleteBookAction {
  return {
    type: DELETE_BOOK,
    payload: { book: book },
  }
}

export function createBook(book: Book): CreateBookAction {
  return {
    type: CREATE_BOOK,
    payload: { book: book },
  }
}
