import { combineReducers } from 'redux'

import books from './books'
import authors from './authors'
import loggedInUser from './user'
import basketState from './basket'
import menuState from './toggleMenu'
import searchState from './search'
import borrowBookState from './borrow'

const createRootReducer = () =>
  combineReducers({
    books,
    authors,
    loggedInUser,
    basketState,
    menuState,
    searchState,
    borrowBookState,
  })

export default createRootReducer
