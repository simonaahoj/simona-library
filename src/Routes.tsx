import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Library from './pages/Library'
import BookDetail from './pages/BookDetail'
import LoginPage from './pages/LoginPage'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/" component={Library} />
    <Route exact path="/book/:id" component={BookDetail} />
  </Switch>
)

export default Routes
