import React, {Component, Fragment} from 'react'

class TodoList extends Component{
    constructor(props) {
        super(props)
        this.state = {
           inputValue: '',
           list: []
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick() {
       this.setState({
           list: [...this.state.list, this.state.inputValue],
           inputValue: ''
       })
    }

    render() {
        return(
            <Fragment>
            <div>
                <input
                    value = {this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
            </div>
            <div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key = {index}>{item}</li>
                    })
                    }
                </ul>
            </div>
        </Fragment>
        )
    }
}

export default TodoList