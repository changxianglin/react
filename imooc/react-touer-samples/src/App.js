import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' component = {About} />
        <Route path = '/contact' component = {Contact} />
        <Route path = '/user/:user' component = {User} />
      </div>
    </Router>
    )
  }
}
export default App;
