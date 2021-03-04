import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import books from './books'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    books,
  })

export default createRootReducer
