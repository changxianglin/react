import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { content, test } = this.props
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