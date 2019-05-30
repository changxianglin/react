import React, { Component } from 'react'
import './style.css'

export default class SearchHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['烤鸭', '火锅', '面条']
    }
  }
  render() {
    return (
      <div className = 'searchHistory'>
        <div className = 'searchHistory__header'>搜索记录</div>
        <ul className = 'searchHistory__list'>
          {
            this.state.data.map((item, index) => {
              return (
                <li 
                  className = 'searchHistory__item' 
                  key = {index}
                  onClick = {this.handleClick}
                  >{item}</li>
              )
            })
          }
        </ul>
        <div className = 'searchHistory__clear' onClick = {this.handleClear}>清除搜索记录</div>
      </div>
    )
  }

  handleClick = () => {

  }

  handleClear = () => {
    this.setState({
      data: [],
    })
  }
}
