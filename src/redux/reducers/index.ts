import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import books from './books'
import authors from './authors'
import loggedInUser from './user'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    books,
    authors,
    loggedInUser,
  })

export default createRootReducer
