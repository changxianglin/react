import React from 'react'
import ReactDOM from 'react-dom'
import { observable, action } from 'mobx'
import { observer } from 'react-dom'

var appState = observable({
    timer: 0
})

@observer 
class TimerView extends React.Component {
    onReset() {
        this.props.appState.resetTimer();
    }

    render() {
        return (
            <button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>
        )
    }
}

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

ReactDOM.render(<TimerView appState={appState} />, document.body);