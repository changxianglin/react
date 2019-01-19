import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

const TodoList = props => {
    const { inputValue, list, handleInputChange, handleClick, handleDelete } = props
    return (
        <div>
            <div>
                <input 
                value = {inputValue}
                onChange = {handleInputChange}
                />
                <button onClick = {handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick = {() => handleDelete(index)} key = {index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    inputValue: state.inputValue,
    list: state.list,
})

const mapDispatchToProps = disptch => ({
    handleInputChange(e) {
            disptch(actionCreators.handleInputChange(e.target.value))
    },
    
    handleClick() {
        disptch(actionCreators.handleClick())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)