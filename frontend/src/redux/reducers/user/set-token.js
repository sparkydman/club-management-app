import {
  GET_TOKEN_FAIL,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
} from '../../constants/user';

const setToken = (state = { token: null }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOKEN_REQUEST:
      return { loading: true };
    case GET_TOKEN_SUCCESS:
      return { loading: false, token: payload };
    case GET_TOKEN_FAIL:
      return { loading: false, error: 'failed' };
    default:
      return state;
  }
};
export default setToken;
