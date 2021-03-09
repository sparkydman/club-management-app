import http from '../../../utils/axios';

import {
  GET_TOKEN_FAIL,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
} from '../../constants/user';

const getToken = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOKEN_REQUEST });
    const { data } = await http.get('/users/token');
    dispatch({
      type: GET_TOKEN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TOKEN_FAIL,
    });
  }
};
export default getToken;
