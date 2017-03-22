import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App'

// Import the reducer and create a store
import { reducer } from './redux/appRedux'
const store = createStore(reducer)

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
