import { userConstants } from '../_constants';

function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        register: true,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default registration;
