import { SET_TOKEN } from '../../constants/user';

const setToken = (state = { token: null }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOKEN:
      return { token: payload };
    default:
      return state;
  }
};
export default setToken;
