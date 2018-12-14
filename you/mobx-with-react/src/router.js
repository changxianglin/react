import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './stores'
import Torender from './torender'
import App from './App'
import Apps from './modal'
import TimerView from './pages/Learn'
import { Provider } from 'mobx-react'
import Test from './modal'

class MRoute extends React.Component {
    render() {
        return(
            <div>
                <Provider {...store}>
                    <BrowserRouter>
                        <Torender>
                            <Switch>
                                <Route exact path = "/" component = {App} />
                                <Route exact path = "/view" component = {TimerView} />
                                <Route exact path = "/test" component = {Test} />
                                <Route render = {() => {return <h1>Not Found</h1>}} />
                            </Switch>
                        </Torender>    
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}


export default MRoute