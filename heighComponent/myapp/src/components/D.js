import React, { Component } from 'react';

function d(WarppedComponent) {
    return class D extends Component {
        render() {
            return (
                <div>
                    我就是高阶组件 D
                    <WarppedComponent />
                </div>
            )
        }
    }
}

export default d