import React from 'react'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGunAsync } from './index.redux'

@connect(
  state => ({
    num: state
  }),
  { addGUN, removeGUN, addGUN }
  )
  
class App  extends React.Component {
  render() {
    const num = this.props.num
    const addGUN = this.props.addGUN
    const removeGUN = this.props.removeGUN
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>有机枪 { num } 把</h1>
        <button onClick = {addGUN}>申请武器</button>
        <button onClick = {removeGUN}>上交武器</button>
        <button onClick = {addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

export default App
