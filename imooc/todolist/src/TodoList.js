import React, { Component } from 'react'
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from './store'
import axios from 'axios'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  render() {
    return <TodoListUI 
      inputValue = { this.state.inputValue } 
      list = { this.state.list }
      handleInputChange = { this.handleInputChange } 
      handleBtnClick = { this.handleBtnClick }
      handleItemClick = { this.handleItemClick }
    />
  }

  componentDidMount() {
    axios.get('/api/todolist').then((res) => {
      const data = res.data.data
      const action = initListAction(data)
      store.dispatch(action)
    })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemClick(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList