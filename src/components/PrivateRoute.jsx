/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import routerService from '../_services/routerService';

const { isLogin } = routerService;
const PrivateRoute = ({ component: Component, ...rest }) => (

  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /sign in page
  <Route
    {...rest}
    render={(props) => (
      isLogin()
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.isRequired,
};

export default PrivateRoute;
