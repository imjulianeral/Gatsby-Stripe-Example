import { createStore, compose, applyMiddleware } from 'redux'
import { save, load } from 'redux-localstorage-simple'

import reducer from './reducers'

const reduxStore = () =>
  createStore(
    reducer,
    load(),
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

export default applyMiddleware(save())(reduxStore)
