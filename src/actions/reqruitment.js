/* eslint-disable import/prefer-default-export */
import { getAll, getDetails } from '../services/reqruitment.service';

const getAllData = (data) => async (dispatch) => {
  const response = await getAll(data);
  if (response.statusCode === 400) {
    //
  } else if (response.statusCode === 200) {
    dispatch({
      type: 'GET_ALL_DATA_REQ',
      payload: response.data
    });
  }
};

const getDetail = (id, navigate) => async (dispatch) => {
  const response = await getDetails(id);
  if (response.statusCode === 400) {
    //
  } else if (response.statusCode === 200) {
    dispatch({
      type: 'GET_DETAIL_DATA_REQ',
      payload: response.data
    });
    navigate('/detail');
  }
};

export { getAllData, getDetail };
