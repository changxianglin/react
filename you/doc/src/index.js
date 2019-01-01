import React from 'react'
import ReactDOM from 'react-dom'

function BoilingVerdict(props) {
    if(props.celius >= 100) {
        return <li>水会开</li>
    } else {
        return <li>水不会开</li>
    }
}

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
  
    handleChange(e) {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      return (
        <fieldset>
          <legend>输入一个摄氏温度</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </fieldset>
      );
    }
  }

  ReactDOM.render(
      <Calculator />,
      document.getElementById('root')
  )