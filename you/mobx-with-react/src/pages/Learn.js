import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { inject,  observer } from 'react-dom'

@inject('learnStore')
@observer 
class TimerView extends Component {
    render() {
        const { learnList } = this.props
        console.log(learnList)
        return (
            <button>
                Seconds passed: {this.props.appState.timer}
            </button>
        )
    }
}

export default TimerView