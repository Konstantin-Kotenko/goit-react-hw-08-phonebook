import axios from 'axios';
import { BASE_URL } from 'constants/baseUrl';

export const authApi = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    authApi.defaults.headers.common.Authorization = '';
  },
};
