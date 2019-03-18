import React, { Component } from 'react'
import Axios from 'axios';

export class req extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  componentDidMount() {
    Axios.get('/data')
    .then(res => {
      console.log(res.data)
      let data = res.data
      console.log(data.name)
      this.setState({
        name: data.name
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <p>Request name is {this.state.name} </p>
      </div>
    )
  }
}

export default req
