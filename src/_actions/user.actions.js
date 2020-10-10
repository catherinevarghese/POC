/* eslint-disable no-undef */
import { userConstants, PATH_CONSTANTS } from '../_constants';
import { userService, routerService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

// registration action
function register(users) {
  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request(users));
    userService.register(users).then(
      (data) => {
        dispatch(success());
        history.push('/login');
        dispatch(alertActions.success(data.message));
      },
      (error) => {
        dispatch(failure(error.message));
        dispatch(alertActions.error(error.message));
      },
    );
  };
}

// login Action
function login(users) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request(users.username));
    userService.login(users).then(
      (data) => {
        console.log(data);
        dispatch(success(data));
        if (!data.results.isLogin) {
          console.log(data.results.isLogin);
          routerService.login(data.results.token);
          history.push(PATH_CONSTANTS.SIGN_UP);
          // window.location.reload();
         } else {
          // history.push(PATH_CONSTANTS.DASHBOARD);
        }
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message));
      },
    );
  };
}

// Logout Action
function logout() {
  window.location.reload();
  routerService.logout();
  history.push('/login');
  return { type: userConstants.LOGOUT };
}

const userActions = {
  login,
  logout,
  register,
  // getAll,
  // delete: _delete,
};

export default userActions;
