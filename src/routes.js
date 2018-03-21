/**
 * export 出口
 */

import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'
import asyncComponent from './components/AsyncComponent'

const AsyncHeader = asyncComponent(() => import('./containers/Header'))
const AsyncHome = asyncComponent(() => import('./containers/Home'))


// TODO 若某个页面需要登录，是否可以在这里处理；若针对某个元素要登录控制，是否可以统一处理？？
// 参考https://github.com/AnomalyInnovations/serverless-stack-demo-client
// 路由先统一管理

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHeader}
      props={childProps} />
    <AppliedRoute
      path="/home"
      exact
      component={AsyncHome}
      props={childProps} />
  </Switch>

