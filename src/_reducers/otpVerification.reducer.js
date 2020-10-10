import {verificationConstants} from  '../_constants';

function otpVerification(state = {}, action){
    switch(action.type) {
  case verificationConstants.OTP_REQUEST:
  return {
    user_details:action.user
  };
  case verificationConstants.OTP_SUCCESS:
      return {
          user_details:action.user,
          isVerify: true,
          // emailVerified: action.results.user.emailVerified
      }
    case verificationConstants.EMAIL_REQUEST:
      return{
        user: action.user
      }
    case verificationConstants.EMAIL_SUCCESS:
      return{
        user:action.user
      }
      default:
          return state;
    }
}

export default otpVerification;