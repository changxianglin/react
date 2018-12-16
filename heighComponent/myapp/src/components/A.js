import React, { Component } from 'react';

function A(WarppedComponent) {
    return class A extends Component {
        render() {
            return (
                <div className = "a-container">
                    <div className = "hader">
                        <div>提示</div>
                        <div>X</div>
                    </div>
                    <div>
                        <WarppedComponent></WarppedComponent>
                    </div>
                </div>
            )
        }
    }
}

export default A