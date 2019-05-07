import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render() {
    const { content, test } = this.props
    console.log("Test render")
    return (
      <div onClick = {this.handleClick}>
        { test } - { content }
      </div>
    )
  }

  handleClick = () => {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}

TodoItem.defaultProps = {
  test: 'Hello: ',
}