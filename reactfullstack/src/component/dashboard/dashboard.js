import React from 'react'

class Dashboard extends from React.Component{
  render() {
    return (
      <h2>header</h2>
      <Route path = '/boss' component = {Boss}></Route>
      <Route path = '/genius' component = {Genius}></Route>
      <h2>footer</h2>
    )
  }
}

export default Dashboard