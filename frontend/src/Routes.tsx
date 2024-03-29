import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Library from './pages/Library'
import BookDetail from './pages/BookDetail'
import LoginPage from './pages/LoginPage'
import AuthorDetail from './pages/AuthorDetail'
import LogoutPage from './pages/LogoutPage'
import BasketPage from './pages/BasketPage'
import AdminBook from './pages/AdminBook'
import AdminAuthor from './pages/AdminAuthor'
import MyBooks from './pages/MyBooks'

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/logout" component={LogoutPage} />
    <Route exact path="/" component={Library} />
    <Route exact path="/book/:id" component={BookDetail} />
    <Route exact path="/author/:id" component={AuthorDetail} />
    <Route exact path="/basket" component={BasketPage} />
    <Route exact path="/admin/book" component={AdminBook} />
    <Route exact path="/admin/author" component={AdminAuthor} />
    <Route exact path="/mybooks" component={MyBooks} />
  </BrowserRouter>
)

export default Routes
