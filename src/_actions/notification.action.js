import { notificationConstants } from '../_constants';

function success(message) {
  return { type: notificationConstants.SUCCESS, message };
}
function error(message) {
  return { type: notificationConstants.ERROR, message };
}
function clear() {
  return { type: notificationConstants.CLEAR };
}

const notificationActions = {
  success,
  error,
  clear,
};

export default notificationActions;
