import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'

import App from './App'
import Wuying from './Wuying'
import Shuying from './Shuying'

@connect(
  state => state.auth,
  { logout }
)
class Dashboard extends Component {
  render() {
    console.log(this.props)
    const redirectToLogin = <Redirect to = '/login'></Redirect>
    const app = (
      <div>
        <h1>三国</h1>
        { this.props.isAuth ? <button onClick = {this.props.logout}>注销</button> : null}
        <ul>
        <li>
          <Link to = '/dashboard/'>曹营</Link>
        </li>
        <li>
          <Link to =  '/dashboard/wuying'>吴营</Link>
        </li>
        <li>
          <Link to = '/dashboard/shuying'>蜀营</Link>
        </li>
      </ul>
      <Route path = "/dashboard/" exact component = {App}></Route>
      <Route path = "/dashboard/wuying" component = {Wuying}></Route>
      <Route path = "/dashboard/shuying" component = {Shuying}></Route>
      </div>
    )
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard