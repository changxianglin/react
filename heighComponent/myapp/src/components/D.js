// import React, { Component } from 'react';

// function d(WarppedComponent) {
//     return class D extends Component {
//         render() {
//             return (
//                 <div>
//                     我就是高阶组件 D
//                     <WarppedComponent />
//                 </div>
//             )
//         }
//     }
// }

// export default d

import React, { Component } from 'react';

const modifyPropsHOC = (WrappedComponent) => class NewComponent extends WrappedComponent {
    componentWillMount() {
        alert('我是修改后的生命周期')
    }
    
    render() {
        const element = super.render()
        const newStyle = {
            color: element.type === 'div' ? 'red': 'green'
        }
        const newProps = {...this.props, style: newStyle}
        return React.cloneElement(element, newProps, element.props.children)   
    }
}

export default modifyPropsHOC
