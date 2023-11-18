const baseUrl = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:8000/api';

export const ENDPOINTS = {
  LOGIN: `${baseUrl}/auth/login`,
  REGISTER: `${baseUrl}/auth/register`,
  GET_TODOS: `${baseUrl}/todo`,
  ADD_TODOS: `${baseUrl}/todo`,
  TOGGLE_TODOS: (id) => `${baseUrl}/todo/${id}`,
  EDIT_TODOS: `${baseUrl}/todo`,
  DELETE_TODOS: (id) => `${baseUrl}/todo/${id}`,
}
