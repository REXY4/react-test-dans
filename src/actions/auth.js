/* eslint-disable import/prefer-default-export */
import { login, check } from '../services/auth.service';

const authLogin = (data) => async (dispatch) => {
  const response = await login(data);
  if (response.statusCode === 400) {
    //
  } else if (response.statusCode === 200) {
    dispatch({
      type: 'LOGIN',
      payload: response.data
    });
  }
};

const checkUser = (token) => async (dispatch) => {
  const response = await check(token);
  if (response.statusCode === 400) {
    // console.log('faile');
  } else if (response.statusCode === 200) {
    dispatch({
      type: 'CHECK_USER',
      payload: response.data
    });
  }
};

const logout = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT'
  });
};

export { authLogin, checkUser, logout };
