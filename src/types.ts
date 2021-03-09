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
  _id: string
  title: string
  published: number
  categories: [string]
  pages: number
  imgUrl: string
  idAuthor: string
  ISBN: number
  description: string
  copy: []
}

export type Author = {
  _id: string
  city: string
  country: string
  birthDate: Date
  firstName: string
  lastName: string
  imgUrl: string
  biography: string
  died: Date
}

export type User = {
  _id: string
  firstName: string
  birthDate: Date
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

export type DeleteBookAction = {
  type: typeof DELETE_BOOK
  payload: {
    book: Book
  }
}

export type AddBasketAction = {
  type: typeof ADD_BASKET
  payload: {
    books: Book[]
  }
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
export type BookAction = FetchBooksAction | AddBooksAction
export type AuthorAction = FetchAuthorsAction | AddAuthorsAction
export type UserAction = FetchLoggedInUserAction | AddLoggeedInUsersAction
export type BasketAction =
  | AddBasketAction
  | RemoveBasketAction
  | ToggleBasketAction
  | ChangeBasketAction

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

export type AuthorsState = {
  authors: Author[]
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
}
