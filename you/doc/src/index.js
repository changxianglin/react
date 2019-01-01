// import React from 'react'
// import ReactDOM from 'react-dom'

// class NameFrom extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = { value: '' }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value)
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type = 'text' value = {this.state.value} onChange = {this.handleChange} />
//                 </label>
//                 <input type = 'submit' value = 'Submit' />
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <NameFrom />,
//     document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom'

class EassyForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 'Please wirte an essay about your favorite DOM element.'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <textarea value = {this.state.value} onChange = { this.handleChange } />
                </label>
                <input type = 'submit' value = 'submit'/>
            </form>
        )
    }
}

ReactDOM.render(
    <EassyForm />,
    document.getElementById('root')
)
