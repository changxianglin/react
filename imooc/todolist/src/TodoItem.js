import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { content } = this.props
    return (
      <div onClick = {this.handleClick}>
        { content }
      </div>
    )
  }

  handleClick = () => {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}
