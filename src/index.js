import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './components/App'
import store from './db/store'
import { Provider } from 'react-redux'

const router = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(router, document.getElementById('root'))
