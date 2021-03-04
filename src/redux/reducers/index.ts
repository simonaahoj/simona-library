import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import books from './books'
import authors from './authors'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    books,
    authors,
  })

export default createRootReducer
