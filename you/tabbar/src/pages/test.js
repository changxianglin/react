import React, { Component } from 'react';
import axios from 'axios'

class Test extends Component {
    state = {
        defaultValue: ''
    }

    componentDidMount () {
        axios.get('https://www.easy-mock.com/mock/5c19219bad81e63c8b5f905d/refs/test').then((res) => {
            console.log(res.data.data)    
        this.setState({
                defaultValue: res.data.data.result
            })
        })
    }

    render() {
        return (
            <div>
                <a href = "/home">home</a>
                <div>123</div>
               {
                   this.state.defaultValue ?  <span ref = {(r) => { r.innerHTML = this.state.defaultValue}}></span>
                   : null 
               }
            </div>
        )
    }
}

export default Test 