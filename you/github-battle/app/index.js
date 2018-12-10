var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')

class App extends React.Component {
  render() {
    return (
      <div>
        Hello React
        <p> can use es6</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
