import http from '../../../utils/axios';

import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  GET_TOKEN_SUCCESS,
} from '../../constants/user';

const Register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await http.post('/users', userData);
    http.defaults.headers.Authorization = `Bearer ${data.token}`;
    dispatch({
      type: GET_TOKEN_SUCCESS,
      payload: data.token,
    });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response
        ? {
            message: error.response.data.error.message,
            path: error.response.data.error.path,
          }
        : { message: error.message },
    });
  }
};
export default Register;
