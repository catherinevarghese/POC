/* eslint-disable import/no-duplicates */
import React from 'react';
import 'antd/dist/antd.css';
import {
  Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { history } from './_helpers';

// import ReduxProvider from './configureRedux';
import { NewEntryAlert, PrivateRoute, PublicRoute } from './components';
import {
  Login, Signup, Homepage,
} from './pages';
import { ShowAlert } from './components';

const App = () => (
  <Router history={history}>
    <ShowAlert />
    <NewEntryAlert/>
    <Switch>
      <PrivateRoute path="/home" component={Homepage} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/signup" component={Signup} />
      <Redirect from="*" to="/home/dashboard" />
    </Switch>
  </Router>
);

export default App;
