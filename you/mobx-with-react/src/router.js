import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './stores'
import App from './App'
import Apps from './modal'
import TimerView from './pages/Learn'

class MRoute extends React.Component {
    render() {
        return(
            <div>
                    <BrowserRouter>
                        <App>
                            <Switch>
                                <Route path = "/" component = {Apps} />
                                <Route path = "/view" component = {TimerView} />
                                <Route render = {() => {return <h1>Not Found</h1>}} />
                            </Switch>
                        </App>    
                    </BrowserRouter>
            </div>
        )
    }
}


export default MRoute