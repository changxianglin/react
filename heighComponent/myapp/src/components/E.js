import React, { Component } from 'react';
import D from './D'

@D
class E extends Component {
    componentWillMount() {
        alert('我是修原始的生命周期')
    }

    render() {
        return (
            <div>
                我是 div
            </div>
        )
    }
}

export default E