import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

class Counter extends Component {
    render() {
        return <div>{this.props.counter}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = { increment, decrement, reset}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter)