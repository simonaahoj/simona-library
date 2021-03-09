import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Library from './pages/Library'
import BookDetail from './pages/BookDetail'
import LoginPage from './pages/LoginPage'
import AuthorDetail from './pages/AuthorDetail'
import LogoutPage from './pages/LogoutPage'
import BasketPage from './pages/BasketPage'
import AdminPage from './pages/AdminPage'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/logout" component={LogoutPage} />
    <Route exact path="/" component={Library} />
    <Route exact path="/book/:id" component={BookDetail} />
    <Route exact path="/author/:id" component={AuthorDetail} />
    <Route exact path="/basket" component={BasketPage} />
    <Route exact path="/admin" component={AdminPage} />
  </Switch>
)

export default Routes
