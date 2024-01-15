import { authService } from '@/services/auth';
import { TypeLoginPayload } from '@/types/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authApi = {
  login: createAsyncThunk(
    'auth/login',
    async (payload: TypeLoginPayload, { rejectWithValue }) => {
      try {
        return (await authService.login(payload)).user;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
};
