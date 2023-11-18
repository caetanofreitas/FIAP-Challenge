export const ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  GET_TODOS: '/todo',
  ADD_TODOS: '/todo',
  TOGGLE_TODOS: (id: string) => `/todo/${id}`,
  EDIT_TODOS: '/todo',
  DELETE_TODOS: (id: string) => `/todo/${id}`,
}