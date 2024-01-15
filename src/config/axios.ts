import axios from 'axios';
import Cookies from 'js-cookie';

export const apiBaseInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(
//   config => {
//     const token = Cookies.get('token');
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   async error => {
//     if (
//       (error.response.status === 401 || error.message === 'Token expired') &&
//       error.config
//     ) {
//       Cookies.remove('token');
//     }

//     throw error;
//   }
// );

// export const apiAuthInstance = axiosInstance;
