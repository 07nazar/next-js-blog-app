import { createSlice } from '@reduxjs/toolkit';
import { TypeAuthState } from './types';
import { authApi } from './api';

const initialState: TypeAuthState = {
  user: null,
  isError: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authApi.login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(authApi.login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(authApi.login.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
    });
  },
});

export const {} = authSlice.actions;

export const auth = authSlice.reducer;
