import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import paramsReducer from './paramsReducer';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  params: paramsReducer
});
