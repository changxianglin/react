import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Token extends React.Component {

    handleClick = () => {
        axios({
            url: 'https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/testall',
            method: 'get',
            headers: {
                'token': '123-token'
            }
        }).then((res) => {
            console.log(res.data)
            localStorage.setItem('test', res.data.data.msg)

            let fr = localStorage.getItem('fr')
            let se = localStorage.getItem('se')
            let th = localStorage.getItem('th')
            let fo = localStorage.getItem('fo')
            let ts = localStorage.getItem('test')

            console.log(fr, se, th, fo, ts)
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>TOKEN 测试请求</button>
            </div>
        )
    }
}

export default Token