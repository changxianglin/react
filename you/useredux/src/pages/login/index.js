import React from 'react'
import { connect } from 'react-redux'
import styles from './login.module.css';

class Login extends React.Component {
    render() {
        return (
            <div>
                <p className = {styles.content}>登录页</p>
            </div>
        )
    }
}

export default connect(null, null)(Login)