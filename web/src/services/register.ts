import { ENDPOINTS } from 'constants/endpoints'
import { LOCAL_STORAGE_TK } from 'constants/keys'
import { ReqErrValidation } from 'utils/requestValidator'

import { api } from './api'

type UserBody = {
  email: string;
  password: string;
  name: string;
}

export const registerRequest = (body: UserBody) => 
api.post(ENDPOINTS.REGISTER, body)
  .then((res) => {
    const { token } = res.data
    localStorage.setItem(LOCAL_STORAGE_TK, token)
    return {
      error: '',
      statusCode: res.status,
    }
  })
  .catch(ReqErrValidation)