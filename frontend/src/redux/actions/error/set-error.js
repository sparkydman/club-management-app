import { SET_ERROR } from '../../constants/error';

const setError = (path, msg, status = 500) => (dispatch) => {
  dispatch({ type: SET_ERROR, payload: { path, msg, status } });
};

export default setError;
