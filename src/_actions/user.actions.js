/* eslint-disable no-undef */
import { userConstants, PATH_CONSTANTS } from '../_constants';
import { userService, routerService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';
import { functionsIn } from 'lodash';

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
        history.push(PATH_CONSTANTS.LOGIN);
        dispatch(alertActions.success(data.message));
      },
      (error) => {
        dispatch(failure(error.message));
        dispatch(alertActions.error(error.message));
      },
    );
  };
}

function emailLogin(user){
  function request(user) {
    return { type: userConstants.EMAIL_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.EMAIL_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.EMAIL_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request(user));
    console.log("reaches here")
    userService.emailLogin(user).then(
      (data) => {
        console.log(data)
        // routerService.login(data.results.token);
        dispatch(success(data));
        history.push(PATH_CONSTANTS.EMAIL);
        // dispatch(alertActions.success(data.message));
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
  localStorage.setItem('phoneNumber',users.phoneNumber);
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
          history.push(PATH_CONSTANTS.OTP);
        }
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message));
      },
    );
  };
}

function editProfile(user) {
  console.log(user)
  function request(user) {
    return { type: userConstants.EDIT_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.EDIT_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.EDIT_FAILURE, error };
  }
  return (dispatch) => {
    userService.editProfile(user).then(
      (data) => {
        console.log(data);
        dispatch(success(data));
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
  // window.location.reload();
  routerService.logout();
  history.push('/login');
  return { type: userConstants.LOGOUT };
}

const userActions = {
  login,
  logout,
  register,
  emailLogin,
  editProfile
  // getAll,
  // delete: _delete,
};

export default userActions;
