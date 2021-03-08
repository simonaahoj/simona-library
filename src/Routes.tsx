import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Library from './pages/Library'
import BookDetail from './pages/BookDetail'
import LoginPage from './pages/LoginPage'
import AuthorDetail from './pages/AuthorDetail'
import LogoutPage from './pages/LogoutPage'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/logout" component={LogoutPage} />
    <Route exact path="/" component={Library} />
    <Route exact path="/book/:id" component={BookDetail} />
    <Route exact path="/author/:id" component={AuthorDetail} />
  </Switch>
)

export default Routes
