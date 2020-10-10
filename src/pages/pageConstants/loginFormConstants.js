/* eslint-disable react/jsx-filename-extension */
import {
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons';
import React from 'react';

// Login form input Elements(Textbox,icon)

export const LOGIN_FORM_ELEMENTS = [
  {
    name: 'phoneNumber',
    required: true,
    message: 'please enter the phoneNumber',
    prefix: <UserOutlined />,
    placeholder: 'phoneNumber',
    size: 'default',
  },
  // {
  //   name: 'password',
  //   required: true,
  //   message: 'please input your password',
  //   prefix: <LockOutlined />,
  //   placeholder: 'password',
  //   size: 'default',
  //   type: 'password',
  // },
];

// Login form text contents

export const LOGIN_FORM_TEXT = {
  LOGIN: 'Login',
  LOGGING_IN: 'Logging in...',
  WANT_TO_REGISTER: 'Want to register?',
};
