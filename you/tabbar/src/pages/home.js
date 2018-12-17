import React, { Component } from 'react';
import Tabbar from '../components/tabbar'   

class Home extends Component {
    render() {
        return (
            <div>
                <img className = "bg" src = {require('../static/images/home.png')} alt = "" />
                <Tabbar />
            </div>
        )
    }
}

export default Home 