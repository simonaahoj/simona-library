// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const ADD_BOOKS = 'ADD_BOOKS'
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const FETCH_AUTHORS = 'FETCH_AUTHORS'
export const ADD_AUTHORS = 'ADD_AUTHORS'
export const FETCH_LOGGED_IN_USER = 'FETCH_LOGGED_IN_USER'
export const ADD_LOGGED_IN_USER = 'ADD_LOGGED_IN_USER'
export const ADD_BASKET = 'ADD_BASKET'
export const REMOVE_BASKET = 'REMOVE_BASKET'
export const TOGGLE_BASKET = 'TOGGLE_BASKET'
export const CHANGE_BASKET = 'CHANGE_BASKET'
export const DELETE_BOOK = 'DELETE_BOOK'
export const CREATE_BOOK = 'CREATE_BOOK'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const CREATE_AUTHOR = 'CREATE_AUTHOR'
export const SEARCH = 'SEARCH'
export const CHANGE_SEARCH = 'CHANGE_SEARCH'
export const BORROW_BOOKS = 'BORROW_BOOKS'
export const LOG_IN_USER = 'LOG_IN_USER'
export const FETCH_BORROWED_BOOK = 'FETCH_BORROWED_BOOK'
export const BORROWED_BOOKS_FETCHED = 'BORROWED_BOOKS_FETCHED'
export const BORROW_DELETE_BOOK = 'BORROW_DELETE_BOOK'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type Book = {
  _id: string | undefined
  title: string
  published: string
  categories: string[]
  pages: string
  imgUrl: string
  idAuthor: string
  ISBN: string
  description: string
  copy: string
}

export type BorrowedBook = {
  _id: string
  idBook: string
  idUser: string
  borrowDate: string
  returnDate: string
}

export type Author = {
  _id: string | undefined
  city: string
  country: string
  birthDate: string
  firstName: string
  lastName: string
  imgUrl: string
  biography: string
  died: string
}

export type User = {
  _id: string
  firstName: string
  birthDate: string
  email: string
  joinDate: Date
  lastName: string
  imgUrl: string
  admin: boolean
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type FetchBooksAction = {
  type: typeof FETCH_BOOKS
}

export type FetchAuthorsAction = {
  type: typeof FETCH_AUTHORS
}

export type FetchLoggedInUserAction = {
  type: typeof FETCH_LOGGED_IN_USER
}

export type AddBooksAction = {
  type: typeof ADD_BOOKS
  payload: {
    books: Book[]
  }
}

export type BorrowedBooksFetchedAction = {
  type: typeof BORROWED_BOOKS_FETCHED
  payload: {
    borrowedbooks: BorrowedBook[]
  }
}

export type BorrowBooksAction = {
  type: typeof BORROW_BOOKS
  payload: {
    books: Book[]
  }
}

export type FetchBorrowedBookAction = {
  type: typeof FETCH_BORROWED_BOOK
}
export type CreateBookAction = {
  type: typeof CREATE_BOOK
  payload: {
    book: Book
  }
}
export type CreateAuthorAction = {
  type: typeof CREATE_AUTHOR
  payload: {
    author: Author
  }
}
export type DeleteBookAction = {
  type: typeof DELETE_BOOK
  payload: {
    book: Book
  }
}

export type BorrowDeleteBookAction = {
  type: typeof BORROW_DELETE_BOOK
  payload: {
    borrowbook: BorrowedBook
  }
}

export type BorrowAsynDeleteBookAction = {
  type: typeof BORROW_DELETE_BOOK
}

export type AddBasketAction = {
  type: typeof ADD_BASKET
  payload: {
    books: Book[]
  }
}

export type ToggleMenuAction = {
  type: typeof TOGGLE_MENU
  payload: {}
}

export type AddAuthorsAction = {
  type: typeof ADD_AUTHORS
  payload: {
    authors: Author[]
  }
}

export type AddLoggeedInUsersAction = {
  type: typeof ADD_LOGGED_IN_USER
  payload: {
    user: User
  }
}

export type LogInUserAction = {
  type: typeof LOG_IN_USER
  payload: {
    id_token: string
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveBasketAction = {
  type: typeof REMOVE_BASKET
  payload: {
    book: Book
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}
export type SearchAction = {
  type: typeof SEARCH
  payload: string
}

export type ChangeSearched = {
  type: typeof CHANGE_SEARCH
  payload: string
}

export type ToggleBasketAction = {
  type: typeof TOGGLE_BASKET
  payload: {}
}

export type ChangeBasketAction = {
  type: typeof CHANGE_BASKET
  payload: {
    book: Book
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction
export type BookAction = FetchBooksAction | AddBooksAction | CreateBookAction
export type AuthorAction = FetchAuthorsAction | AddAuthorsAction
export type UserAction = FetchLoggedInUserAction | AddLoggeedInUsersAction
export type BasketAction =
  | AddBasketAction
  | RemoveBasketAction
  | ToggleBasketAction
  | ChangeBasketAction
export type MenuActions = ToggleMenuAction
export type SearchActions = SearchAction | ChangeSearched
export type BorrowActions = FetchBorrowedBookAction | BorrowedBooksFetchedAction

export type ProductState = {
  inCart: Product[]
}

export type BooksState = {
  books: Book[]
}

export type BasketState = {
  books: Book[]
  open: boolean
}

export type SearchState = {
  filter: string
}

export type BorrowBookState = {
  borrowedBooks: BorrowedBook[] | undefined
}

export type AuthorsState = {
  authors: Author[]
}

export type MenuState = {
  open: boolean
}

export type LoggedInUserState = {
  user: User | undefined
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  books: BooksState
  authors: AuthorsState
  loggedInUser: LoggedInUserState
  basketState: BasketState
  menuState: MenuState
  searchState: SearchState
  borrowBookState: BorrowBookState
}
