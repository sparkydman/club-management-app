import axios from '../../../utils/axios';
import {
  GET_ALL_CLUBS_FAIL,
  GET_ALL_CLUBS_REQUEST,
  GET_ALL_CLUBS_SUCCESS,
} from '../../constants/club';

const getAllClubs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CLUBS_REQUEST });
    const { data } = await axios.get('/clubs');
    dispatch({
      type: GET_ALL_CLUBS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CLUBS_FAIL,
      payload: 'Server Error',
    });
  }
};

export default getAllClubs;
