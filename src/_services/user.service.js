import axios from 'axios';
import BASE_URL from '../config';
import routerService from './routerService';

// register service

// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(user),
// };

// return fetch('sdff/users/register', requestOptions).then(handleResponse);

//  return axios.post(`http://67.207.86.173:8080/auth/register`, { user })
//     .then(res => {
//       console.log('dummyy',res.data);
//       return(
//         res.data
//       )
//       console.log(res);

//     })
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
// registration Service

function register(user) {
  return axios
    .post(`${BASE_URL}/users`, user)
    .then((response) => handleResponse(response))
    .catch((error) => handleResponse(error.response));
}

// Login service

function login(user) {
  return axios
    .post(`${BASE_URL}/users/phone`, user)
    .then((response) => handleResponse(response))
    .catch((error) => handleResponse(error.response));
}

// function getme

// function getme(){
//   return axios.get(`${BASE_URL}/users/me`,{
//     headers:{
//       'Authorization':`Bearer ${token}`
//     }
//   })
//   .then((response)=>{
//     return handleResponse(response);

//   })
//   .catch((error)=>{
//     return handleResponse(error.response)
//   });
// }
const userService = {
  login,
  // logout,
  register,
  // getAll,
  // getById,
  // update,
  // delete: _delete,
};

export default userService;
