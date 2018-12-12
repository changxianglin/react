import React from 'react'
import { observer, inject } from 'mobx-react'

import { observable, action, computed} from 'mobx'

class Todos {
    @observable list = []

    @action addList = (todo) => {
        this.list.push(todo)
    }

    @computed get listCount() {
        console.log(this.list.length)
        return this.list.length
    }

}

const store = new Todos()

@inject("store")
@observer
class Todo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        Todos.addList()
    }
    render() {
        return (
            <div>
                <h1>you have {Todos.listCount} todo things.</h1>
                <hr />
                <form onSubmit = {e => this.handleSubmit(e)}>
                     <input type = "text" name = 'name' />
                     <button>submit</button>                       
                </form>
            </div>
        )
    }
}

export default Todo