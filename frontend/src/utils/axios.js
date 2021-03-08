import axios from 'axios';
import { store } from '../redux/store';
import { SET_TOKEN } from '../redux/constants/user';

let isRefreshing = false;
let refreshSubscribers = [];

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
});

http.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;
    // console.log(status);

    if (status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const { data } = await http.get('/users/token');
          store.dispatch({ type: SET_TOKEN, payload: data.token });
          isRefreshing = false;
          onRrefreshed(data.token);
        } catch (error) {
          console.log(error);
          window.location.href = '/login';
        }
      }
      // eslint-disable-next-line no-unused-vars
      const retryOrigReq = new Promise((resolve, reject) => {
        subscribeTokenRefresh((token) => {
          http.defaults.headers.Authorization = `Bearer ${token}`;
          originalRequest.headers.Authorization = 'Bearer ' + token;
          resolve(axios(originalRequest));
        });
      });
      return retryOrigReq;
    } else {
      return Promise.reject(error);
    }
  }
);

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRrefreshed = (token) => {
  refreshSubscribers.map((cb) => cb(token));
};

export default http;
