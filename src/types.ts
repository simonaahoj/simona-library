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
}

export type Author = {
  _id: string
  city: string
  counry: string
  birthDate: Date
  firstName: string
  lastName: string
  imgUrl: string
}

export type User = {
  _id: string
  firstName: string
  birthDate: Date
  email: string
  joinDate: Date
  lastName: string
  imgUrl: string
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

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction
export type BookAction = FetchBooksAction | AddBooksAction
export type AuthorAction = FetchAuthorsAction | AddAuthorsAction
export type UserAction = FetchLoggedInUserAction | AddLoggeedInUsersAction

export type ProductState = {
  inCart: Product[]
}

export type BooksState = {
  books: Book[]
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
}
