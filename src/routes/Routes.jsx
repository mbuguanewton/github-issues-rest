import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/common/nav/Nav'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Repo from '../pages/Repo'

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/repo/:name' component={Repo} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
