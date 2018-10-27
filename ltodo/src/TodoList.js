import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

class TodoList extends Component{
    constructor(props) {
        super(props)
        this.state = {
           inputValue: '',
           list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleBtnDelete = this.handleBtnDelete.bind(this)
    }

    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleBtnDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {
                list
            }
        })
    }

    getTodoItem() {
        return(
            this.state.list.map((item, index) => {
                return (
                        <TodoItem
                            key = {index}
                            content = {item}
                            index = {index}
                            deleteItem = {this.handleBtnDelete.bind(this)}
                        />
                )
            })
        )
    }

    render() {
        return(
            <Fragment>
            <div>
                <label htmlFor="inputArea">输入内容</label>
                <input
                    id={"inputArea"}
                    className={"input"}
                    value = {this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>提交</button>
            </div>
            <div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </div>
        </Fragment>
        )
    }
}

export default TodoList