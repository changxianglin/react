import React, { Fragment} from 'react';
import { deflateRaw } from 'zlib';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
    }
    this.handleInputChnage = this.handleInputChnage.bind(this)
  }

  render(){
    return (
      <Fragment>
        <div>
          <input value = {this.state.inputValue} onChange = {this.handleInputChnage} />
          <button>提交</button>
        </div>
          <ul>
            <li>学音乐</li>
            <li>learing React</li>
          </ul>
      </Fragment>
    );
  }

  handleInputChnage(e) {
    this.setState({
      inputValue: e.target.inputValue
    })
    
  }
}

export default TodoList