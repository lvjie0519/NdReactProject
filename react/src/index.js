import 'theme/styles/app.css'
if (typeof global.Promise === 'undefined') {
  require.ensure([], function () {
    require('es6-promise/auto')
  })
}

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import AppMain from './AppMain'
import OrderPayPage from './waimai/OrderPayPage'
import OrderListPage from './waimai/OrderListPage'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={AppMain} />
    <Route path='/order-pay' component={OrderPayPage} />
    <Route path='/order-list' component={OrderListPage} />
  </Router >
), document.getElementById('app'))
