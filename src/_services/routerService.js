/* eslint-disable no-undef */
const TOKEN_KEY = 'jwt';
const login = (token) => {
  console.log(token)
  localStorage.setItem(TOKEN_KEY, token);
};

const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};
const getToken = () => (localStorage.getItem(TOKEN_KEY));

const routerService = {
  login,
  logout,
  isLogin,
  getToken,
};

export default routerService;
