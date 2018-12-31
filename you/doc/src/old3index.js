import React from 'react'
import ReactDOM from 'react-dom'

function UserGreeting(props) {
    return <div>Welcome back!</div>
}

function GuestGreeting(props) {
    return <div>Plase sign up.</div>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn) {
        return <GuestGreeting />
    } else {
        return <UserGreeting />
    }
}

ReactDOM.render(
    <Greeting isLoggedIn = { true } />,
    document.getElementById('root')
)