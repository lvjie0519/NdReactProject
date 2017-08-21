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
import PublishQuestion from './question/PublishQuestion'
import QuestionDetail from './question/detail/QuestionDetail'
import JsonOprationDemo from './question/JsonOprationDemo'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={AppMain} />
    <Route path='/publish-question' component={PublishQuestion} />
    <Route path='/question-detail' component={QuestionDetail} />
    <Route path='/json-opration' component={JsonOprationDemo} />
  </Router >
), document.getElementById('app'))
