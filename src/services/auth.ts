import { apiBaseInstance } from '@/config/axios';
import { TypeAuthResponse, TypeLoginPayload } from '@/types/auth';
import Cookies from 'js-cookie';

type TypeAuthService = {
  login: (payload: TypeLoginPayload) => Promise<TypeAuthResponse>;
};

export const authService: TypeAuthService = {
  login: async payload => {
    const response = await apiBaseInstance.post<TypeAuthResponse>(
      'auth/login',
      {
        payload,
      }
    );

    if (response.data) {
      Cookies.set('token', response.data.accessToken);
    }

    return response.data;
  },
};
