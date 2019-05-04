import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import User from './User'

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/user/:user' component = {User} />
          <Route path = '/' exact component = {Home} />
        </Switch>
      </div>
    </Router>
    )
  }
}
export default App;
