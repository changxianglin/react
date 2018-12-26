import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Test extends React.Component {

    handleClick = () => {
        axios.get('https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/testall').then((res) => {
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
                <button onClick = {this.handleClick}>TE测试请求</button>
                <hr />
                <Link to ='/test'>test</Link>
                <hr />
                <Link to ='/fr'>fr</Link>
                <hr />
                <Link to ='/se'>se</Link>
                <hr />
                <Link to ='/th'>th</Link>
                <hr />
                <Link to ='/fo'>fo</Link>
            </div>
        )
    }
}

export default Test