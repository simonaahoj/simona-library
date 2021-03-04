import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Library from './pages/Library'
import Product from './pages/Product'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Library} />
    <Route exact path="/products/:id" component={Product} />
  </Switch>
)

export default Routes
