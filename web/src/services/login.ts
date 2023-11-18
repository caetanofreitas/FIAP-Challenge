import { ENDPOINTS } from 'constants/endpoints'
import { LOCAL_STORAGE_TK } from 'constants/keys'
import { ReqErrValidation } from 'utils/requestValidator'

import { api } from './api'

export const loginRequest = (email: string, password: string) => 
api.post(ENDPOINTS.LOGIN, { email, password })
  .then((res) => {
    const { token } = res.data
    localStorage.setItem(LOCAL_STORAGE_TK, token)
    return {
      error: '',
      statusCode: res.status,
    }
  })
  .catch(ReqErrValidation)