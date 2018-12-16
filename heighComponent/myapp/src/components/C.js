import React, { Component } from 'react';
import A from './A'

// class C extends Component {
//     render() {
//         return (
//             <div>
//                 <img src = {require('../images/C.jpeg')} alt = "" />
//             </div>
//         )
//     }
// }

// export default A('提示')(C)

@A('告警')
class C extends Component {
    getName() {
        return '我是 C 组件'
    }

    render() {
        return (
            <div>
                 <input type = 'text' {...this.props} />
                 <br />
                <img src = {require('../images/C.jpeg')} alt = "" />
            </div>
        )
    }
}

export default C