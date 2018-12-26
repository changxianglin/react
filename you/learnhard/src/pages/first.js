import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class First extends React.Component {

    handleClick = () => {
        axios.get('https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/update').then((res) => {
            console.log(res.data)
            localStorage.setItem('fr', res.data.data.msg)
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>FR测试请求</button>
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

export default First