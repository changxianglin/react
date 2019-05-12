import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  changInputValue,
  addItem,
  deleteItem
} from './store/actionCreators'

const TodoList = (props) => {
  const {
    inputValue,
    handleInputChange,
    list,
    handleClick,
    handleDeleteItem
  } = props

  return (
    <div>
        <div>
          <input 
            value = { inputValue }
            onChange = { handleInputChange }
          />
          <button onClick = { handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key = { index } onClick = { () => {handleDeleteItem(index)}}>{ item }</li>
            })
          }
        </ul>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const value = e.target.value
      const action = changInputValue(value)
      dispatch(action)
    },
    handleClick() {
      const action = addItem()
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = deleteItem(index)
      dispatch(action)
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)