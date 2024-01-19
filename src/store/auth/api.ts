import { authService } from '@/services/auth';
import {
  TypeAuthResponse,
  TypeLoginPayload,
  TypeRegisterPayload,
} from '@/types/auth';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export const authApi = {
  login: createAsyncThunk<
    TypeAuthResponse['user'],
    TypeLoginPayload,
    { rejectValue: string }
  >('auth/login', async (payload, { rejectWithValue }) => {
    try {
      return (await authService.login(payload)).user;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      if (!err.response) {
        throw error;
      }

      return rejectWithValue(err.response.data.message);
    }
  }),
  register: createAsyncThunk<
    TypeAuthResponse['user'],
    TypeRegisterPayload,
    { rejectValue: string }
  >('auth/register', async (payload, { rejectWithValue }) => {
    try {
      return (await authService.register(payload)).user;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      if (!err.response) {
        throw error;
      }

      return rejectWithValue(err.response.data.message);
    }
  }),
  refresh: createAsyncThunk<
    TypeAuthResponse['user'],
    void,
    { rejectValue: string }
  >('auth/refresh', async (_, { rejectWithValue }) => {
    try {
      return await authService.refresh();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      if (!err.response) {
        throw error;
      }

      return rejectWithValue(err.response.data.message);
    }
  }),
  logout: createAsyncThunk<void, void, { rejectValue: string }>(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        return await authService.logout();
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        if (!err.response) {
          throw error;
        }

        return rejectWithValue(err.response.data.message);
      }
    }
  ),
  getMe: createAsyncThunk<
    TypeAuthResponse['user'],
    undefined,
    { rejectValue: string }
  >('auth/getMe', async (_, { rejectWithValue }) => {
    try {
      return await authService.getMe();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      if (!err.response) {
        throw error;
      }

      return rejectWithValue(err.response.data.message);
    }
  }),
};
