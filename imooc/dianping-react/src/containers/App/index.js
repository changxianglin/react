import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ErrorToast from '../../components/ErrorToast'
import Home from '../Home'
import { actions as appActions, getError } from '../../redux/modules/app';
import ProductDetail from '../ProductDetail';
import Search from '../Search'
import SearchResult from '../SearchResult'

class App extends Component{
  render() {
    const { error, appActions: {clearError}} = this.props
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path = '/detail/:id' component = {ProductDetail} />
          <Route path = '/search' component = {Search} />
          <Route path = '/search_result' component = {SearchResult} />
          <Route path = '/' component = { Home } />
        </Switch>
      </Router>
        {
          error ? 
          <ErrorToast msg = {error} clearError = {clearError} /> : 
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    error: getError(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
