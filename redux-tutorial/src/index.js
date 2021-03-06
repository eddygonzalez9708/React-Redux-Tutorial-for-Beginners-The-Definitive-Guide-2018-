import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import store from './js/store/index'
import App from './js/components/App.jsx'

// import index from './js/index'

import './index.css'

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister()