/* eslint-disable default-param-last */
/* eslint-disable no-duplicate-case */
const initialState = {
  isLogin: false,
  token: null,
  user: null
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isLogin: true
      };
    case 'CHECK_USER':
      return {
        ...state,
        user: payload
      };
    case 'LOGOUT':
      return {
        isLogin: false,
        token: null,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
