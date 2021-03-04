// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const ADD_BOOKS = 'ADD_BOOKS'
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const FETCH_AUTHORS = 'FETCH_AUTHORS'
export const ADD_AUTHORS = 'ADD_AUTHORS'

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

export type ProductState = {
  inCart: Product[]
}

export type BooksState = {
  books: Book[]
}

export type AuthorsState = {
  authors: Author[]
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
}
