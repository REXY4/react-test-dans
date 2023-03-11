/* eslint-disable import/prefer-default-export */
import { login, check, registerUser } from '../services/auth.service';

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

// eslint-disable-next-line no-unused-vars
const register = (data, alert, message, condition) => async (dispatch) => {
  const response = await registerUser(data);
  if (response.code === 400) {
    alert(true);
    message(response.messages[0].message);
    condition('danger');
    setTimeout(() => {
      alert(false);
    }, 3000);
  } else if (response.statusCode === 200) {
    alert(true);
    message('Create Data Success');
    condition('success');
    setTimeout(() => {
      alert(false);
      window.location.reload();
    }, 3000);
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

export { authLogin, checkUser, logout, register };
