import axios from 'axios'
import { LOCAL_STORAGE_TK } from 'constants/keys';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api',
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TK);
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