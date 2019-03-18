import React, { Component } from 'react'

export class req extends Component {
  componentDidMount() {
    fetch('/')
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default req
