import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, Link } from 'react-router'

import App from './containers/App'
import appReducer from './reducers/Reducers'
import { createHistory } from 'history'

import About from './containers/About'

let history = createHistory()

let store = createStore(appReducer)

let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={history}>

      <Route path="/" component={App}>
      </Route>

      <Route path="/about" component={About} />

    </Router>
  </Provider>

  ,
  rootElement
)



