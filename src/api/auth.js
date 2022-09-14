import { authApi } from './axios';

export const register = credentials =>
  authApi.post('/users/signup', credentials).then(r => r.data);

export const login = credentials =>
  authApi.post('/users/login', credentials).then(r => r.data);

export const logout = () => authApi.post('/users/logout').then(r => r.data);

export const current = () => authApi.get('/users/current').then(r => r.data);
