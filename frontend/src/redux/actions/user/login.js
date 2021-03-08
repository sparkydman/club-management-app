import axios from 'axios';

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_TOKEN,
  GET_ME_SUCCESS,
} from '../../constants/user';

const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post('/users/login', userData);
    axios.defaults.headers.Authorization = `Bearer ${data.token}`;
    dispatch({
      type: SET_TOKEN,
      payload: data.data.token,
    });
    dispatch({
      type: GET_ME_SUCCESS,
      payload: data.data,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response
        ? {
            message: error.response.data.error.message,
            path: error.response.data.error.path,
          }
        : { message: error.message },
    });
  }
};
export default login;
