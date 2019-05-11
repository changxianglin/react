import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div style = {{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input 
            value = {props.inputValue} 
            placeholder = 'todo info' 
            style = {{ width: "300px", marginRight: '10px' }} 
            onChange = { props.handleInputChange }
          />
          <Button type = "primary" onClick = { props.handleBtnClick }>提交</Button>
          <List
            bordered
            style = {{ marginTop: '10px', width: '300px' }}
            dataSource = { props.list }
            renderItem = { (item, index) => (<List.Item onClick = {(index) => {props.handleItemClick(index)}}>{ item }</List.Item>)}
          />
        </div> 
      </div>
  )
}

export default TodoListUI