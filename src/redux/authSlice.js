import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { token } from 'api/axios';
import { register, login, logout, current } from 'api/auth';

const initialState = {
  user: {
    name: '',
    email: null,
  },
  token: null,
  isLogged: false,
};

export const getUserName = state => state.auth.user?.name;
export const getLogging = state => state.auth.isLogged;
export const getToken = state => state.auth.token;

export const authUser = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await register(credentials);
    token.set(data.token);
    Notify.success('You are autharization');
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await login(credentials);
    token.set(data.token);
    Notify.success('you are login');
    return data;
  } catch (error) {
    Notify.failure(`${error}. This user don't exist`);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await logout();
    token.unset();
    Notify.success('You are logout');
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const data = await current();
      return data;
    } catch (error) {
      token.unset();
      Notify.failure(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logoutUser.fulfilled](state) {
      state.user = {
        name: '',
        email: null,
      };
      state.token = null;
      state.isLogged = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogged = true;
    },
  },
});
