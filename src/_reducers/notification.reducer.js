import { notificationConstants } from '../_constants';

function notification(state = {}, action) {
  switch (action.type) {
    case notificationConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
      };
    case notificationConstants.ERROR:
      return {
        type: 'error',
        message: action.message,
      };
    case notificationConstants.CLEAR:
      return {};
    default:
      return state;
  }
}

export default notification;
