import React from 'react'
import { Link } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return (
            <div>
            This is main page
            <br />
            <Link to = "/main/test-id">a</Link>
            <br />
            <Link to = "/main/456">b</Link>
            <hr />
            {this.props.children}
            </div>
        )
    }
}