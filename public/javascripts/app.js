import { createHistory } from 'history'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App'
import About from './containers/About'
import Login from './containers/Login'

import appReducer from './reducers/Reducers'

const history = createHistory()

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

const store = createStoreWithMiddleware(appReducer);

//let store = createStore(appReducer)
const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
        component: App,
    childRoutes: [
      {path: '/About',
       component: About},
      require('./containers/Login')
    ]
  } ]
}

render(
//  <Provider store={store}>
//    <Router history={history}>
//        <Route path="/" component={App} >
//        </Route>
//          <Route name="about" path='About' component={About} />
//    </Router>
//  </Provider>

  <Provider store={store}>
    <Router history={history} routes={rootRoute} />
  </Provider>
  ,
  document.getElementById('root')
)

