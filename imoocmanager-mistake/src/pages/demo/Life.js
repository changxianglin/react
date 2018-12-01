import React from 'react'
import Child from './Child'

export default class Life extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    handleClick() {
        this.setState({
            count:this.state.count + 1
        })
    }
    
    render() {
        let stye = {
            padding: 50
        }
        return <div style = { stye }>
            <p>React 生命周期</p>
            <button onClick = {this.handleAdd}>点击一下</button>
            <button onClick = {this.handleClick.bind(this)}>点击一下</button>    
            <p>{this.state.count}</p>
            <Child name = {this.state.count}></Child>
        </div>
    }   
}