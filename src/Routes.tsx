import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Counrty from './pages/Country/SingleCountry'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/country/:name" component={Counrty} />
  </Switch>
)

export default Routes
