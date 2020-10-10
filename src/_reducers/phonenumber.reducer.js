import { NumberConstants } from '../_constants/phoneNumber.constants';


function numberRegistration(state = {}, action) {
    switch (action.type) {
      // case NumberConstants.PHONE_NUMBER_REQUEST:
      //   return {
      //   //   ...state,
      //   //   isLoading: true,
      //   phoneNumber: action.user
      //   };
      // case NumberConstants.PHONE_NUMBER_SUCCESS:
      //   return {
      //   //   ...state,
      //   //   isLoading: false,
      //   phoneNumber: action.user
      //   };
      default:
        return state;
    }
  }
  
  export default numberRegistration;