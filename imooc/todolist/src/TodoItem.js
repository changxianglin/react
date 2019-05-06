import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { content, index } = this.props
    return (
      <div onClick = {() => this.handleClick(index)} key = {index}>
        { content }
      </div>
    )
  }

  handleClick = (index) => {
    this.props.deleteItem(index)
  }
}
