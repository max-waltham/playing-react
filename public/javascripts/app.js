import { createHistory } from 'history'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, DefaultRoute, Link } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import CommonTemplate from './containers/CommonTemplate'
import App from './containers/App'
import About from './containers/About'
import Login from './containers/Login'

import appReducer from './reducers/Reducers'

import routes from './routes';
import cookie from './utils/cookie'
const history = createHistory()

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);

const store = createStoreWithMiddleware(appReducer,{ auth: { token: cookie.get('token') || '' } });

//const store2 = createRedux( (process.env.NODE_ENV === 'production') ? window.__INITIAL_STATE__ : { auth: { token: cookie.get('token') || '' } });


render(

  <Provider store={store}>
    <Router history={history} routes={routes(store, true)} />
  </Provider>
  //<Provider store={store}>
  //  <Router history={history} routes={rootRoute}/>
  //</Provider>
  ,
  document.getElementById('root')
)


