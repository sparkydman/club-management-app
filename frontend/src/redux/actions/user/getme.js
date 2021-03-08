import http from '../../../utils/axios';

import {
  GET_ME_FAIL,
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
} from '../../constants/user';

const getMe = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ME_REQUEST });
    const { data } = await http.get('/users/me');
    dispatch({
      type: GET_ME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ME_FAIL,
      payload: error.response
        ? {
            message: error.response.data.error.message,
            path: error.response.data.error.path,
          }
        : { message: error.message },
    });
  }
};
export default getMe;
