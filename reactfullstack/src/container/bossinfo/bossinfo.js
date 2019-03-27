import React from 'react'
import { NavBar, InputItem, TextareaItem } from 'antd-mobile'
import AvatartSelector  from '../../component/avatar-selector/avatar-selector' 


class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    return (
      <div>
        <NavBar mode="dark">Boss 完善信息页面</NavBar>
        <AvatartSelector></AvatartSelector>
        <InputItem onChange = {(v) => this.onChange('title', v)}>
          招聘职位
        </InputItem>
        <InputItem onChange = {(v) => this.onChange('company', v)}>
          公司名称
        </InputItem>
        <InputItem onChange = {(v) => this.onChange('money', v)}>
          职位薪资
        </InputItem>
        <TextareaItem 
          onChange = {(v) => this.onChange('desc', v)}
          row = {3}
          autoHeight
        >
          职位要求
        </TextareaItem>
      </div>
    )
  }
}

export default BossInfo