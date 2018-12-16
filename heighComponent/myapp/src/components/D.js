import React, { Component } from 'react';

function d(WrappedComponent) {
    return class D extends Component {
        render() {
            return (
                <div>
                    我就是高阶组件 D
                    <WrappedComponent />
                </div>
            )
        }
    }
}

export default d