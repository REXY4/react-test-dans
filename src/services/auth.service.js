/* eslint-disable import/prefer-default-export */
import { Api } from '../config/api';

const login = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = Api.post('/user/login', data, config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return response;
};

const registerUser = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = Api.post('/user/register', data, config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return response;
};

const check = async (token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  const response = await Api.get('/user/check', config);
  return response.data;
};
export { login, check, registerUser };
