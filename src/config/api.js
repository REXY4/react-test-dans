import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const setAuthToken = (token) => {
  if (token) {
    Api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete Api.defaults.headers.common.Authorization;
  }
};
