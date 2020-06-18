import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store'

function wrapRootElement({ element }) {
  const store = createStore()
  return <Provider store={store}>{element}</Provider>
}

export { wrapRootElement }
