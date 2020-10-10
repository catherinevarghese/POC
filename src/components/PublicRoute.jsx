/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import routerService from '../_services/routerService';

const { isLogin } = routerService;
const PublicRoute = ({ component: Component, restricted, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isLogin() && restricted
        ? <Redirect to="/home/dashboard" />
        : <Component {...props} />
    )}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.isRequired,
  restricted: PropTypes.isRequired,
};

export default PublicRoute;
