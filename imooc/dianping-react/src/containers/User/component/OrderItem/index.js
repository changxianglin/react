import React, { Component } from 'react'
import './style.css'

export default class OrderItem extends Component {
  render() {
    const { data: { title, statusText, orderPicUrl, channel, text, type, commentId }} = this.props
    return (
      <div className = 'orderItem'>
        <div className = 'orderItem__title'>
          <span>{title}</span>
        </div>
        <div className = 'orderItem__main'>
          <div className = 'orderItem__imgWrapper'>
            <div className = 'orderItem__tag'>{statusText}</div>
            <img className = 'orderItem__img' src = {orderPicUrl} alt = '' />
          </div>
          <div className = 'orderItem__content'>
            <div className = 'orderItem__line'>{text[0]}</div>
            <div className = 'orderItem__line'>{text[1]}</div>
          </div>
        </div>
        <div className = 'orderItem__bottom'>
          <div className = 'orderItem__type'>{channel}</div>
          <div className = ''>
            {
              type === 1 && !commentId ? (
                <div className = 'orderItem__btn' onClick = {this.handleComment}>评价</div>
              ) : null  
            }
            <div className = 'orderItem__btn' onClick = {this.handleRemove}>删除</div>
          </div>
        </div>
        { this.renderEditArea() }
      </div>
    )
  }

  // 渲染订单评价区域的 DOM
  renderEditArea = () => {
    return (
      <div className = 'orderItem__commentContainer'>
        <textarea 
          className = 'orderItem__comment' 
          onChange = {this.handleCommentChange}
          value = {this.props.comment}
        />
        { this.renderStars() }
        <button className = 'orderItem__commentBtn' onClick = {this.props.onSubmitComment}>提交</button>
        <button className = 'orderItem__commentBtn' onClick = {this.props.onCanelComment}>取消</button>
      </div>
    )
  }

  // 评价星际
  renderStars = () => {
    const {stars} = this.props 
    return (
      <div className = 'orderItem__starContainer'>
        {
          [1, 2, 3, 4, 5].map((item, index) => {
            const lightClass = stars >= item ? 'orderItem__star--light' : ''
            return (
              <span 
                className = {'orderItem__star ' + lightClass}
                key = {index}
                onClick = {this.props.onStarsChange.bind(this, item)}
              >★</span>
            )
          })
        }
      </div>
    )
  }

  // 评价按钮点击状态
  handleComment = () => {
    const {
      data: {id}
    } = this.props
    this.props.onComment(id)
  }

  // 评价信息发生变化
  handleCommentChange = (e) => {
    this.props.onCommentChange(e.target.value)
  }

  // 删除订单
  handleRemove = () => {
    this.props.onRemove()
  }
}
