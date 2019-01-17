import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Write extends PureComponent {
    render() {
        const { loginState } = this.props
        if(loginState) {
            return (
                <div>写文章</div>
            )
        } else {
            return <Redirect to = '/login' />
        }
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
})



export default connect(mapState, null)(Write)