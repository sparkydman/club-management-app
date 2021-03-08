import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../../constants/user';

const login = (state = { user: null }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: payload };
    case LOGIN_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
export default login;
