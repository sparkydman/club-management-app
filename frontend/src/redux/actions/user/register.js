import axios from 'axios';

import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_TOKEN,
} from '../../constants/user';

const Register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const { data } = await axios.post('/users', userData);
    axios.defaults.headers.Authorization = `Bearer ${data.token}`;
    dispatch({
      type: SET_TOKEN,
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
