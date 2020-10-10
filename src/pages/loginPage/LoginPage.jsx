/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {
  Form, Input, Button, Card,
} from 'antd';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import '../../css/loginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { PATH_CONSTANTS } from '../../_constants';
import { LOGIN_FORM_ELEMENTS, LOGIN_FORM_TEXT } from '../pageConstants/loginFormConstants';
import userActions from '../../_actions/user.actions';

const Login = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication);
  const { isLogin } = authentication;

  // useEffect(() => {
  //   user && dispatch(userActions.login(user));
  // }, [user]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log(user);
  };

  const handleSubmit = () => {
    console.log(user);
    dispatch(userActions.login(user));
    console.log(isLogin);
    if (isLogin) {
      console.log("the user is not logged in");
      return (
        <Redirect to='/signup' />
      );
    }
  };
  const {
    LOGGING_IN, LOGIN, WANT_TO_REGISTER,
  } = LOGIN_FORM_TEXT;
  const LOGINFORMFIELDS = LOGIN_FORM_ELEMENTS.map(
    ({
      name, required, message, prefix, placeholder, size, type,
    }) => (
      <Form.Item
        name={name}
        rules={[
          {
            required: { required },
            message: { message },
          },
        ]}
        key={name}
      >
        <Input
          prefix={prefix}
          placeholder={placeholder}
          size={size}
          name={name}
          type={type}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
    ),
  );

  return (
    <div className="loginpage-fullcontainer">
      <Card
        align="middle"
        className="loginpage-container"
        title={
          <h1><b>{LOGIN}</b></h1>
      }
        style={{ width: '25rem' }}
      >
        <Form onFinish={handleSubmit}>
          {LOGINFORMFIELDS}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {LOGIN}
            </Button>
          </Form.Item>
          {/* <Card>
            <b>{WANT_TO_REGISTER}</b>
           <Link to={PATH_CONSTANTS.SIGN_UP}>{SIGNUP_FORM_TEXT.SIGNUP}</Link>
          </Card> */}
        </Form>
      </Card>
    </div>

  );
};

export default Login;
