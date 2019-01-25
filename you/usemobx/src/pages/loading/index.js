import React, { Component } from 'react';
import { Button } from 'antd'
import axios from '../../utils/axios'

class Loading extends Component {
    handleRequest = () => {
        axios.ajax({
            url: 'https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/loading',
            isShowLoading: true,
        }).then(res => console.log(res.data))
    }
    render() {
        return (
            <div>
                <h1>测试加载</h1>
                <Button onClick = {this.handleRequest}>请求数据</Button>
            </div>
        )
    }
}

export {Loading}