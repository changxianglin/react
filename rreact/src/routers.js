import React from 'react'
import {Router, Route, Link} from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory";

import First from './first'
import Home from './home'
import About from './about'
import Detail from './detail'

const customHistory = createBrowserHistory();

export default class Routers extends React.Component{
    render() {
        return(
            <Router history = {customHistory}>
                <div>
                    <ul>
                        <li>
                            <Link to = "/">first page</Link>
                        </li>
                        <li>
                            <Link to = "/home">home</Link>
                        </li>
                        <li>
                            <Link to = "/about">About</Link>
                        </li>
                        <li>
                            <Link to = '/detail'>detail</Link>
                        </li>
                    </ul>
                    <Route exact path = "/" component = {First} />
                    <Route path = "/home" component = {Home}/>
                    <Route path = "/about" component = {About}/>
                    <Route path = "/detail" component = {Detail}/>
                </div>
            </Router>
        )
    }
}