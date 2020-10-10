import React, { useState } from 'react';
import {
  Form, Input, Button, Card,
} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  UserOutlined, LockOutlined, MailOutlined, PhoneOutlined,
} from '@ant-design/icons';
import userActions from '../../_actions/user.actions';
import '../../css/signupPage.css';
import routerService from '../../_services/routerService';
import { PATH_CONSTANTS } from '../../_constants';
import { SIGNUP_FORM_TEXT, LOGIN_FORM_TEXT } from '../pageConstants';

const TOKEN_KEY = 'jwt';
const Signup = () => {
  const dispatch = useDispatch();
  const registration = useSelector((state) => state.registration);
  const authentication = useSelector((state) => state.authentication);
  const { isLoading } = registration;
  const { getToken } = routerService;
  console.log(authentication.token);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    referredCodeKey: 'U3DEAQ',
    agreeToPrivacyPolicy: true,
    source: 'WEB_APP',
    token: `${authentication.token}`,
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    console.log(user);
    dispatch(userActions.register(user));
  };

  const {
    SIGNUP, SIGNING_UP, ALREADY_REGISTERED, MINIMUM_LENGTH_REQUIRED,
    CONFIRM_YOUR_PASSWORD, NOT_MATCH, USERNAME, EMAIL, PASSWORD,
    CONFIRM_PASSWORD, PHONE_NUMBER,
  } = SIGNUP_FORM_TEXT;
  return (
    <Card
      type="flex"
      justify="center"
      align="middle"
      className="signuppage-container"
      title={
        <h1><b>{SIGNUP}</b></h1>
        }
      style={{ width: '25rem' }}
    >
      <Form onFinish={handleSubmit}>
        <Form.Item>
          <Input
            required
            type="text"
            prefix={<UserOutlined />}
            placeholder={USERNAME}
            size="default"
            name="firstName"
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            required
            type="text"
            prefix={<UserOutlined />}
            placeholder="Please enter your last name"
            size="default"
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>

        <Form.Item
          name="email"
        >
          <Input
            required
            type="email"
            prefix={<MailOutlined />}
            placeholder={EMAIL}
            size="default"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            required
            prefix={<PhoneOutlined />}
            placeholder={PHONE_NUMBER}
            size="default"
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        {/* <Form.Item
          name="password"
          rules={[
            {
              required: true,
              min: 8,
              max: 15,
              message: MINIMUM_LENGTH_REQUIRED,
            },
          ]}
          hasFeedback
        >
          <Input.Password
            required
            prefix={<LockOutlined />}
            placeholder="password"
            size="default"
            name={PASSWORD}
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: CONFIRM_YOUR_PASSWORD,
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  NOT_MATCH,
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder={CONFIRM_PASSWORD}
            size="default"
            name="confirmpassword"
          />
        </Form.Item> */}
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="login-form-button"
          >
            {isLoading && isLoading ? SIGNING_UP : SIGNUP}
          </Button>
        </Form.Item>
        <Card>
          <b>{ALREADY_REGISTERED}</b>
          <Link to={PATH_CONSTANTS.LOGIN}>{LOGIN_FORM_TEXT.LOGIN}</Link>
        </Card>
      </Form>
    </Card>
  );
};
export default Signup;
