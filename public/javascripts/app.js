import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, Link } from 'react-router'

import App from './containers/App'
import About from './containers/About'
import todoApp from './reducers/TodoReducers'

import { createHistory } from 'history'

let history = createHistory()

let store = createStore(todoApp)

let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={history}>

      <Route path="index.html" component={App}>
      </Route>

      <Route path="index.html/about" component={About}/>

    </Router>

  </Provider>

  ,
  rootElement
)

