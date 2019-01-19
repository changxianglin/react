import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input 
                    value = {this.props.inputValue}
                    onChange = {this.props.handleInputChange}
                    />
                    <button onClick = {this.handleClick}>提交</button>
                </div>
                <ul>
                    <li>zhang</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputValue: state.inputValue,
})

const mapDispatchToProps = disptch => ({
    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value,
        }
        disptch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)