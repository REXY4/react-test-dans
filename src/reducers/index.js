import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import authReq from './reqruitment';

const reducers = combineReducers({
  auth: authReducer,
  req: authReq
});

export default reducers;
