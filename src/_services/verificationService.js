import axios from 'axios';
import BASE_URL from '../config';
import routerService from './routerService';


const { logout } = routerService;
function handleResponse(response) {
    if (response.status === 400) {
      logout();
      return Promise.reject(response.data);
    }
    // // else if(!response.data.success){
    // //   return Promise.reject(response.data);
    // }
    return response.data;
  }

function otpVerification(data){
    return axios
    .post(`${BASE_URL}/users/phone/verify`, data)
    .then((response) => handleResponse(response))
    .catch((error) => handleResponse(error.response));
}
function emailVerification(data){
  return axios
  .post(`${BASE_URL}/users/email/verify`, data)
  .then((response) => handleResponse(response))
  .catch((error) => handleResponse(error.response));
}

 const verificationServices ={
  otpVerification,
  emailVerification
}
export default verificationServices;