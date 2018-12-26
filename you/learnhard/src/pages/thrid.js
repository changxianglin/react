import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Thrid extends React.Component {
    handleClick = () => {
        axios.get('https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/add').then((res) => {
            console.log(res.data)
            localStorage.setItem('th', res.data.data.meg)
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>TH测试请求</button>
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

export default Thrid