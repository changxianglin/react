import React from 'react'

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

export default TodoList