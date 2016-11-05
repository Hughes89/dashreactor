import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, DefaultRoute } from 'react-router';
import DashboardLessons from './components/dashboards/DashboardLessons.js';
// import './index.css';
import AuthService from './components/utils/AuthService.js';
import Login from './components/login/login.js';


const auth = new AuthService('4ZP5XvMbVnvvU6hSpNT3togDmRzI7pHH', 'scripty-luke.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({pathname: '/login'})
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={DashboardLessons} onEnter={requireAuth}>
    </Route>
    <Route path="/login" component={Login} auth={auth}>
    </Route>
  </Router>
), document.getElementById('app'))