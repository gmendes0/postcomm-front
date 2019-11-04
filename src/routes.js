import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
