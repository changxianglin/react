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
          <Route path = '/about' render = {(props) => <About {...props} />} />
          <Route path = '/contact' children = {props => <div>{props.match ? "active" : "inactive"}</div>} />
          <Route path = '/user/:user' component = {User} />
          <Route path = '/' exact component = {() => <Home />} />
        </Switch>
      </div>
    </Router>
    )
  }
}
export default App;
