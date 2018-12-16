import React, { Component } from 'react';
// import A from './A'
import d from './D'

class B extends Component {
    render() {
        return (
            <div>
                <img src = {require('../images/B.jpg')} alt = "" />
            </div>
        )
    }
}

export default d(B)