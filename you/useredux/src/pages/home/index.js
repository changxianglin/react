import React from 'react'
import { connect } from 'react-redux'
import styles from './home.module.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <p className = {styles.content}>首页</p>
            </div>
        )
    }
}

export default connect(null, null)(Home)