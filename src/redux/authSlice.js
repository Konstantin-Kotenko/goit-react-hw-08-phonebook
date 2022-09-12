import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import axios from 'axios';
import { token } from 'api/axios';

const initialState = {
  user: {
    name: '',
    email: null,
  },
  token: null,
  isLogged: false,
};

export const getUserName = state => state.auth.user.name;
export const getLogging = state => state.auth.isLogged;
export const getToken = state => state.auth.token;

export const authUser = createAsyncThunk('auth/register', async values => {
  try {
    const { data } = await axios.post('/users/signup', values);
    token.set(data.token);
    Notify.success('You are autharization');
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async values => {
  try {
    const { data } = await axios.post('/users/login', values);
    token.set(data.token);
    Notify.success('you are login');
    return data;
  } catch (error) {
    Notify.failure(`${error}. This user don't exist`);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    Notify.success('You are logout');
  } catch (error) {
    Notify.failure(error.message);
  }
});

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
  },
});
