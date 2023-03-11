/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { Api } from '../config/api';

const getAll = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    }
  };
  const { description, location, full_time, page } = data;
  const des = description === '' ? '' : `description=${description}`;
  const loc = location === '' ? '' : `location=${location}`;
  const pag = page === '' ? '' : `page=${page}`;
  const ftime = full_time === false ? '' : `full_time=${full_time}`;
  const arr = [des, loc, pag, ftime];
  const filteredArr = arr.filter((str) => str !== '');
  const param = filteredArr.join('&');
  const response = await Api.post(`/reqruitment?${param}`, {}, config);
  return response.data;
};

const getDetails = async (id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    }
  };
  const response = await Api.get(`/reqruitment/${id}`, config);
  return response.data;
};

export { getAll, getDetails };
