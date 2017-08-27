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
import OrderEdit from './order/OrderEdit'
import OrderCheck from './order/OrderCheck'
import OrderCheckResult from './order/OrderCheckResult'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={AppMain} />
    <Route path='/edit-order' component={OrderEdit} />
    <Route path='/check-order' component={OrderCheck} />
    <Route path='/check-order-result' component={OrderCheckResult} />
  </Router >
), document.getElementById('app'))
