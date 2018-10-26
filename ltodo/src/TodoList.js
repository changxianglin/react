import React, {Component, Fragment} from 'react'

class TodoList extends Component{
    render() {
        return(
            <Fragment>
            <div>
                <input />
                <button>提交</button>
            </div>
            <div>
                <ul>
                <li>学英语</li>
                <li>learn React</li>
                </ul>
            </div>
        </Fragment>
        )
    }
}

export default TodoList