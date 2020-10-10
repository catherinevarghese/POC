import { useEffect } from 'react';
import { message } from 'antd';
import { useSelector } from 'react-redux';
import { GLOBALCONSTANTS } from '../_constants';

const ShowAlert = () => {
  const alert = useSelector((state) => state.alert);
  const success = () => {
    message.success(alert.message, 3);
  };
  const error = () => {
    message.error(alert.message, 3);
  };
  useEffect(() => {
    if (alert.type === GLOBALCONSTANTS.SUCCESS) {
      success();
    } else if (alert.type === GLOBALCONSTANTS.ERROR) {
      error();
    }
  }, [alert]);

  return null;
};

export default ShowAlert;
