import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { Button } from 'antd';

@inject('LearnStore')
@observer
class TimerView extends Component {
  render() {
    const { learnList } = this.props.LearnStore
    console.log(learnList)
    return (
      <div>
        {learnList.map((entry, i) => <Button key = {i}>{entry.msg}</Button>)}
      </div>
    );
  }
}

export default TimerView;
