import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch';
import Modals from './pages/ui/modals';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path = "/login" component = {Login} />
                    <Route path = "/admin" render = {() => 
                        <Admin>
                          <Switch>
                            <Route path = "/admin/ui/buttons" component = {Buttons} />
                            <Route path = "/admin/ui/modals" component = {Modals} />
                            <Route path = "/admin/form/login" component = {FormLogin} />
                            <Route paht = "/admin/form/reg" component = {FormRegister} />
                            <Route component = {NoMatch} />
                          </Switch>
                        </Admin>
                    } />
                    <Route path = "/order/detail" component = {Login} />
                </App>
            </HashRouter>
        )
    }
}