import React from 'react'

class App  extends React.Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    const addGUN = this.props.addGUN
    const removeGUN = this.props.removeGUN
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>有机枪 { num } 把</h1>
        <button onClick = {() => store.dispatch(addGUN())}>申请武器</button>
        <button onClick = {() => store.dispatch(removeGUN())}>上交武器</button>
        <button onClick = {() => store.dispatch(addGunAsync())}>拖两天再给</button>
      </div>
    )
  }
}

export default App