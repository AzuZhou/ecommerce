import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

export const history = createBrowserHistory()

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    enhancers
  )
)

export default store
