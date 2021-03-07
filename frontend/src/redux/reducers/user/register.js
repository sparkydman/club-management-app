import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../../constants/user';

const register = (state = { user: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, user: payload };
    case REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
export default register;
