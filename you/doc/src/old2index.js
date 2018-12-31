import React from 'react'
import ReactDOM from 'react-dom'

// class App extends React.Component{
//     handleClick = (e) => {
//         e.preventDefault()
//         console.log('The links ')
//     }
//     render() {
//         return (
//             <div>
//             <a href="#" onClick={this.handleClick}>
//                 Click me
//             </a>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(
            preState => ({
                isToggleOn: !this.state.isToggleOn
            })
        )
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>
                    {this.state.isToggleOn ? 'NO' : 'OFF'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)