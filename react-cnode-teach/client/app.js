import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './views/App'

import AppState from './store/app.state'

// ReactDOM.hydrate(<App />, )

const initialState = window.__INITIAL__STATE__ || {} // eslint-disable-line

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default //eslint-disable-line
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}
