import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { observable, action, computed } from 'mobx'
import { observer, PropTypes as ObservablePropTypes} from 'mobx-react'
import PropTypes from 'prop-types'


class Todo {
    id = Math.random()

    @observable title = ""
    @observable finished = false

    constructor(title) {
        this.title = title
    }

    @action.bound toggle() {
        this.finished = !this.finished
    }
}

class Store {
    @observable todos = []

    @action.bound createTodo(title) {
        this.todos.unshift(new Todo(title))
    }

    @action.bound removeTodo(todo) {
        this.todos.remove(todo)
    }


    @computed get left() {
        return this.todos.filter(todo => !todo.finished).length
    }
}


var store = new Store()

@observer
class TodoItem extends React.Component{
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired
        }).isRequired
    }

    handleClick = e => {
        this.props.todo.toggle()
    }

    render() {
        const todo = this.props.todo
        return <Fragment>
            <input type="checkbox" className="toggle"
                   defaultChecked={todo.finished}
                   onClick={this.handleClick}
            />
            <span className={['title', todo.finished && 'finished'].join(" ")}>{todo.title}</span>
        </Fragment>
    }
}

@observer
class TodoList extends React.Component {
    static propTypes = {
        store: PropTypes.shape({
            createTodo: PropTypes.func,
            todos: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired
        }).isRequired
    }

    state = { inputValue: ''}

    handleSubmit = (e) => {
        e.preventDefault()

        var store = this.props.store
        var inputeValue = this.state.inputValue

        store.createTodo(inputeValue)

        this.setState({
            inputValue: ''
        })
    }

    handleChange = (e) => {
        var inputValue = e.target.value

        this.setState({
            inputValue
        })
    }

    render() {
        const store = this.props.store
        const todos = store.todos
        return <div className= "todo-list">
            <header>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           onChange={this.handleChange}
                           value={this.state.inputValue}
                           className="input"
                           placeholder={"What need to finished ?"} />
                </form>
            </header>
            <ul>{todos.map(todo => {
                return <li key = {todo.id} className="todo-item">
                    <TodoItem todo = {todo} />
                    <span className="delete"
                          onClick={e => store.removeTodo(todo)}>X</span>
                </li>
            })}</ul>
            <footer>{store.left} item(s) unfinished</footer>
        </div>
    }
}


ReactDOM.render(<TodoList store = {store}/>, document.getElementById('root'));


