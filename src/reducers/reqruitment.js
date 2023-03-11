/* eslint-disable default-param-last */
/* eslint-disable no-duplicate-case */
const initialState = {
  data: null,
  detail: null
};

const authReq = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'GET_ALL_DATA_REQ':
      return {
        ...state,
        data: payload
      };
    case 'GET_DETAIL_DATA_REQ':
      return {
        ...state,
        detail: payload
      };
    default:
      return state;
  }
};

export default authReq;
