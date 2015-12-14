import { createHistory } from 'history'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, DefaultRoute, Link } from 'react-router'

import createLogger from 'redux-logger';

import CommonTemplate from './containers/CommonTemplate'
import App from './containers/App'
import About from './containers/About'
import Login from './containers/Login'
import Profile from './containers/Profile'
import NotFound from './containers/NotFound'

const routes = (
      <Route  component={CommonTemplate} >
        <Route name="login" path="/login" component={Login} />
        <Route name="app" path='/' component={App} />
        <Route name="about" path='/About' component={About} />
        <Route name="about" path='/About/:msg' component={About} />

        <Route requireAuth>
          <Route path="/profile" component={Profile} />
        </Route>

        <Route path="*" component={NotFound} />
      </Route>
);

function walk(routes, cb) {

  cb(routes);

  if (routes.childRoutes) {
    routes.childRoutes.forEach(route => walk(route, cb));
  }

  return routes;
}

export default (store, client) => {
  return walk(Route.createRouteFromReactElement(routes), route => {
    route.onEnter = (nextState, transition) => {
      console.log(nextState)
      console.log("store.getState()",store.getState())

      const loggedIn = store.getState().auth.token === 'test';

      if (route.requireAuth && !loggedIn) {
        transition( { nextPathname: nextState.location.pathname }, '/login');
      } else if (client) {
        console.log(store, client)
        store
      }
    };
  });
};