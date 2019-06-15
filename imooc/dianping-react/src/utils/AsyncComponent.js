import React, { Component } from 'react'

export default function asyncComponent(importComponent) {
 class AsyncComponent extends Component {
   constructor(props) {
     super(props)
     this.state = {
      component: null 
    }
   }

   componentDidMount() {
     importComponent().then((mod) => {
       this.setState({
         component: mod.default
       })
     })
   }

   render() {
     const C = this.setState.component 
     return C ? <C {...this.props} /> : null 
   }
 } 

 return AsyncComponent
}
