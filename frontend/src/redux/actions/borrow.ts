import {
  BorrowBooksAction,
  BORROW_BOOKS,
  Book,
  FetchBorrowedBookAction,
  FETCH_BORROWED_BOOK,
  BorrowedBooksFetchedAction,
  BORROWED_BOOKS_FETCHED,
  BorrowedBook,
  BorrowDeleteBookAction,
  BORROW_DELETE_BOOK,
} from '../../types'

export function borrowBooks(books: Book[]): BorrowBooksAction {
  return {
    type: BORROW_BOOKS,
    payload: { books: books },
  }
}

export function fetchBorrowed(): FetchBorrowedBookAction {
  return {
    type: FETCH_BORROWED_BOOK,
  }
}

export function booksFetched(
  borrowedBooks: BorrowedBook[]
): BorrowedBooksFetchedAction {
  return {
    type: BORROWED_BOOKS_FETCHED,
    payload: { borrowedbooks: borrowedBooks },
  }
}

export function borrowdeleteBook(
  borrowbook: BorrowedBook
): BorrowDeleteBookAction {
  return {
    type: BORROW_DELETE_BOOK,
    payload: { borrowbook: borrowbook },
  }
}
