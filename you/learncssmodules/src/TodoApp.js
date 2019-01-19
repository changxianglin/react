import React, { Component } from 'react'
import { connect } from 'react-redux'


class TodoApp extends Component {
    render() {
        return (
            <div>1234</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = {

}

const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ConnectedComponent = connectToStore(Component)

connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

