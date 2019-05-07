import React, { Fragment} from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
    }

  }

  render(){
    return (
      <Fragment>
        <div>
          <input 
            value = {this.state.inputValue}
            onKeyDown = {this.enterKey} 
            onChange = {this.handleInputChnage} />
          <button onClick = {this.handleBtnClick}>提交</button>
        </div>
          <ul>
            { this.getTodoItem() }
          </ul>
      </Fragment>
    );
  }

  getTodoItem = () => {
    return (
      this.state.list.map((item, index) => {
        return <TodoItem key = {index} content = {item} index = { index } deleteItem = {this.handleItemDelete.bind(this)} />
      })
    )
  }

  enterKey = (e) => {
    if(e.keyCode === 13) {
      this.handleBtnClick()
    }
  }

  handleInputChnage = (e) => {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value,
    }))
  }

  handleBtnClick = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }))
  }

  handleItemDelete = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList