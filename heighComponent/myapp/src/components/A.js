// import React, { Component } from 'react';

// function A(WarppedComponent) {
//     return class A extends Component {
//         render() {
//             return (
//                 <div className = "a-container">
//                     <div className = "hader">
//                         <div>提示</div>
//                         <div>X</div>
//                     </div>
//                     <div>
//                         <WarppedComponent></WarppedComponent>
//                     </div>
//                 </div>
//             )
//         }
//     }
// }

// export default A

import React, { Component } from 'react';

export default (title) => WarppedComponent => class A extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    refc(instance) {
        // instance.getName && alert(instance.getName())
    }   

    onInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
            const { age, ...otherProps } = this.props 
            const newProps = {
                value: this.state.value,    
                onInput: this.onInputChange
            }
            return (
                <div className = "a-container">
                    <div className = "hader">
                        <div>{title}</div>
                        <div>X</div>
                    </div>
                    <div>
                        <WarppedComponent sex = {'男'} {...otherProps} ref = {this.refc.bind(this)} {...newProps} />
                    </div>
                </div>
            )
        }
}