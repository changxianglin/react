import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx'
import { observer, PropTypes as ObservablePropTypes} from 'mobx-react'
import PropTypes from 'prop-types'


class Todo {
    id = Math.random()

    @observable title = ""
    @observable finished = false

    constructor(title) {
        this.title = title
    }
}

class Store {
    @observable todos = []

    @action.bound createTodo(title) {
        this.todos.unshift(new Todo(title))
    }

}


var store = new Store()

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
            <ul></ul>
            <footer></footer>
        </div>
    }
}


ReactDOM.render(<TodoList store = {store}/>, document.getElementById('root'));


