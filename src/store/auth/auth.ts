import { createSlice } from '@reduxjs/toolkit';
import { TypeAuthState } from './types';
import { authApi } from './api';

const initialState: TypeAuthState = {
  user: null,
  isError: false,
  isLoading: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearErrors: state => {
      state.isError = false;
      state.errorMessage = null;
    },
  },
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
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    });
    builder.addCase(authApi.register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(authApi.register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(authApi.register.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    });
    builder.addCase(authApi.getMe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authApi.getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(authApi.getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    });
    builder.addCase(authApi.logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authApi.logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = null;
    });
    builder.addCase(authApi.logout.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    });
    builder.addCase(authApi.refresh.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(authApi.refresh.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(authApi.refresh.rejected, (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    });
  },
});

export const { clearErrors } = authSlice.actions;

export const auth = authSlice.reducer;
