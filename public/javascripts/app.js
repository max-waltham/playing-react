import { createHistory } from 'history'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, DefaultRoute, Link } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


import Top from './containers/Top'
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



render(

  <Provider store={store}>
    <Router history={history}>
      <Route  component={Top} >
        <Route name="app" path='/' component={App} />
        <Route name="about" path='/About' component={About} />
        <Route name="about" path='/About/:msg' component={About} />

        <Route requireAuth>
          <Route path="/profile" component={About} />
        </Route>

      </Route>
    </Router>
  </Provider>
  //<Provider store={store}>
  //  <Router history={history} routes={rootRoute}/>
  //</Provider>
  ,
  document.getElementById('root')
)

