import React from 'react'

class App extends React.Component {
  render() {
    const fream = 'FullStack'
    return (
      <div>
        <div>Start learn {fream}</div>
        <Func name = 'zhangsan'></Func>
      </div>
    )
  }
}

function Func(props) {
  return <h2>Hello, {props.name}</h2>
}


export default App