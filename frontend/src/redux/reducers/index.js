import { combineReducers } from 'redux';
import register from './user/register';
import login from './user/login';
import token from './user/set-token';
import error from './error';
import me from './user/get-me';

export default combineReducers({
  error,
  register,
  login,
  token,
  me,
});
