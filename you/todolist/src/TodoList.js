import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    render() {
        return (
            <div style = {{ marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input value = {this.state.inputValue} placeholder = "todo info" style = {{ width: '300px', marginRight: '10px'}} />
                    <Button type = 'primary' >提交</Button>
                 </div>
                 <List
                    style = {{width: '300px', marginTop: '10px'}} 
                    bordered
                    dataSource = {this.state.list}
                    renderItem = {item => (<List.Item>{item}</List.Item>)}
                 />   
            </div>
        )
    }
}

export default TodoList