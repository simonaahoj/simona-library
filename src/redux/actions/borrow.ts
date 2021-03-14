import { BorrowBooksAction, BORROW_BOOKS, Book } from '../../types'

export function borrowBooks(books: Book[]): BorrowBooksAction {
  return {
    type: BORROW_BOOKS,
    payload: { books: books },
  }
}
