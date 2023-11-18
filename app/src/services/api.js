import axios from 'axios';
import * as SecureStorage from 'expo-secure-store';

import { LOCAL_STORAGE_TK } from '../constants/keys';

export const api = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Encoding': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true,
  },
})

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStorage.getItemAsync(LOCAL_STORAGE_TK)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Token inválido ou ausente. Redirecionando para o login.');
    }

    return Promise.reject(error);
  }
);