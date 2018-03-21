
//TODO 权限控制 https://github.com/AnomalyInnovations/serverless-stack-demo-client/blob/code-splitting-in-create-react-app/src/App.js
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const childProps = {}
    return (
      <Routes childProps={childProps} />
    )
  }
}

export default withRouter(App)