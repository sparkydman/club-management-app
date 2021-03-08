import { SET_ERROR } from '../../constants/error';

const errorState = (state = {}, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...action.payloay };

    default:
      return state;
  }
};
export default errorState;
