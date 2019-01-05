import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'


class TodoList extends Component{
    constructor(props) {
        super(props)
        this.state = store.getState()

        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <div style = {{marginTop: '10px', marginLeft: '10px'}}>
                <Input 
                value = {this.state.inputValue} 
                placeholder = "todo info" 
                style = {{width: '300px', marginRight: '10px'}}
                onChange = {this.handleInputChange}
                 />
                <Button 
                type = "primary"
                onClick = {this.handleBtnClick}
                >提交</Button>
                <List
                style = {{ marginTop: '10px', width: '300px'}}
                bordered
                dataSource = {this.state.list}
                renderItem = {
                    (item, index) => (
                    <List.Item 
                    onClick = {this.handleItemDelete.bind(this, index)}
                    >
                    {item}
                    </List.Item>
                    )}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick() {
        const action = {
            type: ADD_TODO_ITEM
        }
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action)
    }
}

export default TodoList