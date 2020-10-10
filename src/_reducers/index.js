import { combineReducers } from 'redux';
import alert from './alert.reducer';
import notification from './notification.reducer';
import authentication from './authentication.reducer';
// import { users } from './user.reducer';
import registration from './registration.reducer';
// import allSuppliers from './suppliers.reducer';
// import allTransactions from './transaction.reducer';
import numberRegistration from  './phonenumber.reducer';
import otpVerification from  './otpVerification.reducer';
const rootReducer = combineReducers({
  authentication,
  registration,
  numberRegistration,
  otpVerification,
  // allSuppliers,
  alert,
  // allTransactions,
  notification,
});

export default rootReducer;
