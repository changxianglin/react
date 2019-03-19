import React from 'react'

class App extends React.Component {
  render() {
    const fream = 'FullStack'
    return (
      <div>
        <div>Start learn {fream}</div>
        <Func name = 'zhangsan'></Func>
        <hr />
        <Test></Test>
      </div>
    )
  }
}

function Func(props) {
  return <h2>Hello, {props.name}</h2>
}

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      solders: ['zhangsan', 'lisi', 'wanger', 'mazi']
    }
  }
    render() {
      return (
        this.state.solders.map((solder) => {
          return <h2 key = {solder}>{solder}</h2>
        })
      )
    }
}


export default App