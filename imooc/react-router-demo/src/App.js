import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path = '/about' component = {About} />
            <Route path = '/contact' component = {Contact} />
            <Route path = '/user' component = {User} />
            <Route path = '/' component = {Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App