import React, { Component } from 'react';
import A from './A'

class C extends Component {
    render() {
        return (
            <div>
                <img src = {require('../images/C.jpeg')} alt = "" />
            </div>
        )
    }
}

export default A('提示')(C)