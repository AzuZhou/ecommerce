import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

export const history = createBrowserHistory()

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)

const saveState = state => {
  try {
    const serialisedState = JSON.stringify(state)
    window.localStorage.setItem('state', serialisedState)
  } catch (err) {
    console.error(err)
  }
}

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('state')
    if (!serialisedState) return undefined
    return JSON.parse(serialisedState)
  } catch (err) {
    return undefined
  }
}
const oldState = loadState()

const store = createStore(
  rootReducer,
  oldState,
  compose(
    applyMiddleware(thunk),
    enhancers
  )
)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
