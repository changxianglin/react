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
        render() {
            const { age, ...otherProps } = this.props 
            return (
                <div className = "a-container">
                    <div className = "hader">
                        <div>提示</div>
                        <div>X</div>
                    </div>
                    <div>
                        <WarppedComponent sex = {'男'} {...otherProps} />
                    </div>
                </div>
            )
        }
}