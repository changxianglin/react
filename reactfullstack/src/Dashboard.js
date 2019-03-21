import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import App from './App'
import Wuying from './Wuying'
import Shuying from './Shuying'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
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
  }
}
