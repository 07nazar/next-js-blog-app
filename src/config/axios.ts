import { TypeAuthResponse } from '@/types/auth';
import axios from 'axios';
import Cookies from 'js-cookie';

export const apiBaseInstance = axios.create({
  baseURL: 'http://localhost:5300/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiBaseInstance.interceptors.request.use(config => {
  const token = Cookies.get('token');

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiBaseInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response =
        await apiBaseInstance.get<TypeAuthResponse>('auth/refresh');

      if (response.data) {
        Cookies.set('token', response.data.accessToken);
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + response.data.accessToken;
      }

      return apiBaseInstance(originalRequest);
    }

    Cookies.remove('token');
    return Promise.reject(error);
  }
);
