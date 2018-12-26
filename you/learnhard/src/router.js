import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Test from './pages/test'
import First from './pages/first'
import Second from './pages/second'
import Third from './pages/thrid'
import Fourth from './pages/fourth'

class ZRouter extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component = {Test} />
                    <Route path = "/test"  component = {Test} />
                    <Route path = "/fr"  component = {First} />
                    <Route path = "/se"  component = {Second} />
                    <Route path = "/th"  component = {Third} />
                    <Route path = "/fo"  component = {Fourth} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default ZRouter