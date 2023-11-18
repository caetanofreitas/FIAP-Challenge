import { ENDPOINTS } from 'constants/endpoints'
import { ReqErrValidation } from 'utils/requestValidator'

import { api } from './api'
import { Todo } from 'pages/Main/Main'

export const getTodosRequest = () => 
  api.get(ENDPOINTS.GET_TODOS)
    .then((res) => {
      const { data } = res
      return {
        error: '',
        data,
        statusCode: res.status,
      }
    })
    .catch(ReqErrValidation)

export const addTodosRequest = (description: string) => 
  api.post(ENDPOINTS.ADD_TODOS, { description })
    .then((res) => {
      const { data } = res
      return {
        error: '',
        data,
        statusCode: res.status,
      }
    })
    .catch(ReqErrValidation)

export const toggleTodosRequest = (id: string) => 
  api.patch(ENDPOINTS.TOGGLE_TODOS(id), {})
    .then((res) => {
      const { data } = res
      return {
        error: '',
        data,
        statusCode: res.status,
      }
    })
    .catch(ReqErrValidation)

export const editTodosRequest = (body: Todo) => 
  api.put(ENDPOINTS.EDIT_TODOS, body)
    .then((res) => {
      const { data } = res
      return {
        error: '',
        data,
        statusCode: res.status,
      }
    })
    .catch(ReqErrValidation)
    
export const deleteTodosRequest = (id: string) => 
  api.delete(ENDPOINTS.DELETE_TODOS(id), {})
    .then((res) => {
      const { data } = res
      return {
        error: '',
        data,
        statusCode: res.status,
      }
    })
    .catch(ReqErrValidation)