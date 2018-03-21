import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import AppContainer from './AppContainer'
import { Provider } from 'react-redux'
import initializeStore from './store/initializeStore'
const store = initializeStore()

const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>,
  MOUNT_NODE
)