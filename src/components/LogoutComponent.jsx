import React from 'react';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import userActions from '../_actions/user.actions';

const LogoutComponent = () => {
  const dispatch = useDispatch();
  return (
    <Button
      type="primary"
      shape="circle"
      icon={<LogoutOutlined />}
      size="large"
      onClick={() => dispatch(userActions.logout())}
    />
  );
};

export default LogoutComponent;
