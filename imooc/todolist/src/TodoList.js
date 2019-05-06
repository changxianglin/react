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
          <input value = {this.state.inputValue} onChange = {this.handleInputChnage} />
          <button onClick = {this.handleBtnClick}>提交</button>
        </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <TodoItem content = {item} index = { index } deleteItem = {this.handleItemDelete.bind(this)} />
                // return <li key = {index} onClick = {() => this.handleItemDelete(index)}>{item}</li>
              })
            }
          </ul>
      </Fragment>
    );
  }

  handleInputChnage = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }

  handleItemDelete = (index) => {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList