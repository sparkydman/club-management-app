import {
  GET_ME_FAIL,
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
} from '../../constants/user';

const getMe = (state = { user: null }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ME_REQUEST:
      return { loading: true };
    case GET_ME_SUCCESS:
      return { loading: false, user: payload };
    case GET_ME_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
export default getMe;
