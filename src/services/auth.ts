import { apiBaseInstance } from '@/config/axios';
import {
  TypeAuthResponse,
  TypeLoginPayload,
  TypeRegisterPayload,
} from '@/types/auth';
import Cookies from 'js-cookie';

type TypeAuthService = {
  login: (payload: TypeLoginPayload) => Promise<TypeAuthResponse>;
  register: (payload: TypeRegisterPayload) => Promise<TypeAuthResponse>;
  getMe: () => Promise<TypeAuthResponse['user']>;
  logout: () => Promise<void>;
  refresh: () => Promise<TypeAuthResponse['user']>;
};

export const authService: TypeAuthService = {
  login: async payload => {
    const response = await apiBaseInstance.post<TypeAuthResponse>(
      'auth/login',
      payload
    );

    if (response.data) {
      Cookies.set('token', response.data.accessToken, {});
    }

    return response.data;
  },
  register: async payload => {
    const response = await apiBaseInstance.post<TypeAuthResponse>(
      'auth/register',
      payload
    );

    if (response.data) {
      Cookies.set('token', response.data.accessToken);
    }

    return response.data;
  },
  getMe: async () => {
    const response =
      await apiBaseInstance.get<TypeAuthResponse['user']>('auth/getMe');
    return response.data;
  },
  logout: async () => {
    const response = await apiBaseInstance.post('auth/logout');

    Cookies.remove('token');

    return response.data;
  },
  refresh: async () => {
    const response =
      await apiBaseInstance.get<TypeAuthResponse>('auth/refresh');

    if (response.data) {
      Cookies.set('token', response.data.accessToken);
    }

    return response.data.user;
  },
};
