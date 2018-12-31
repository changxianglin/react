import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    handleClick = (e) => {
        e.preventDefault()
        console.log('The links ')
    }
    render() {
        return (
            <div>
            <a href="#" onClick={this.handleClick}>
                Click me
            </a>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)