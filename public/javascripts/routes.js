
import { Route } from 'react-router';
import React from 'react';
import CommonTemplate from './containers/CommonTemplate';
import App from './containers/App';
import About from './containers/About';
import Login from './containers/Login';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';

const routes = (
  <Route component={CommonTemplate}>
    <Route name="login" path="/login" component={Login}/>

    <Route requireAuth>
      <Route name="app" path="/" component={App}/>
      <Route name="about" path="/About" component={About}/>
      <Route name="about" path="/About/:msg" component={About}/>
      <Route path="/profile" component={Profile}/>
    </Route>

    <Route path="*" component={NotFound}/>
  </Route>
);


function walk(rts, cb) {
  cb(rts);

  if (rts.childRoutes) {
    rts.childRoutes.forEach(route => walk(route, cb));
  }

  return rts;
}

function fillStore(redux, nextState, components) {
  return Promise.all(components.map(compo => {
    const compoL = compo && compo.WrappedComponent || compo;

    if (!compoL || !compoL.fillStore) {
      return;
    }

    compoL.fillStore(redux, nextState);
  }));
}

export default (store, client) => {
  return walk(Route.createRouteFromReactElement(routes), route => {
    route.onEnter = (nextState, transition) => {
      console.log(nextState);
      console.log('store.getState()', store.getState());

      const loggedIn = store.getState().auth.token === 'test';

      if (route.requireAuth && !loggedIn) {
        transition({ nextPathname: nextState.location.pathname }, '/login');
      } else if (client) {
        console.log(store, client);
        const st = fillStore(store, nextState, [route.component]);
        console.log('st =', st);
        return st;
      }
    };
  });
};
