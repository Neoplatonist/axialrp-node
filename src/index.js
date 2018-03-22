import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './store'
import { initState } from './reducers';
import './index.css'
import App from './app'
//import registerServiceWorker from './registerServiceWorker'

// Let the reducers handle initial state
const store = configureStore(...initState)
if (window.DATA && window.DATA !== '{{data}}') {
  window.DATA=JSON.parse(window.atob(window.DATA))
} else {
  window.DATA = {}
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root')
)
//registerServiceWorker()