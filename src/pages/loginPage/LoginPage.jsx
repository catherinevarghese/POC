/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Form, Input, Button, Card,
} from 'antd';
import '../../css/loginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_FORM_ELEMENTS, LOGIN_FORM_TEXT } from '../pageConstants/loginFormConstants';
import  userActions from '../../_actions/user.actions';

const Login = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication);
  const registration = useSelector((state) => state.registration);
   const { register} = registration;   
  const number = JSON.parse(localStorage.getItem('phoneNumber'));
 

// form change for phone number
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };


  const handleSubmit = () => {
    console.log(user);
  !register && dispatch(userActions.login(user));
  register && dispatch(userActions.emailLogin(user))
  //  dispatch(userActions.emailLogin(user))
  };
  const { LOGIN } = LOGIN_FORM_TEXT;
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
 const handleEmailChange = (e) => {
setUser({
  [e.target.name]: e.target.value,
  token: `${authentication.token}`,
  phoneNumber: `${number}`,
});
console.log("the email user", user)
 }
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
       { register? <Form.Item><Input name="email" placeholder="Please eneter youe email ID" onChange={(e) => handleEmailChange(e)} /></Form.Item>:LOGINFORMFIELDS} 
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {LOGIN}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>

  );
};

export default Login;
