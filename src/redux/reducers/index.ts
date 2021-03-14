import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import books from './books'
import authors from './authors'
import loggedInUser from './user'
import basketState from './basket'
import menuState from './toggleMenu'
import searchState from './search'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    books,
    authors,
    loggedInUser,
    basketState,
    menuState,
    searchState,
  })

export default createRootReducer
