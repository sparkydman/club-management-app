import axios from 'axios';
import { store } from '../redux/store';
import { GET_TOKEN_FAIL, GET_TOKEN_SUCCESS } from '../redux/constants/user';

let isRefreshing = false;

const options = {
  common: {
    'Content-Type': 'application/json',
    Authorization: store.getState().token,
  },
};

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${process.env.REACT_APP_SITE_URL}/api`
      : 'http://localhost:8000/api',
  headers: options,
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const { data } = await http.get('/users/token');
          store.dispatch({ type: GET_TOKEN_SUCCESS, payload: data.token });
          http.defaults.headers.Authorization = `Bearer ${data.token}`;
          originalRequest.headers.Authorization = 'Bearer ' + data.token;
          return await axios(originalRequest);
        } catch (error) {
          store.dispatch({
            type: GET_TOKEN_FAIL,
            payload: error.response
              ? {
                  message: error.response.data.error.message,
                  path: error.response.data.error.path,
                }
              : { message: error.message },
          });
          window.location.replace = '/login';
        }
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default http;
