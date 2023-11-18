import * as SecureStorage from 'expo-secure-store';

import { ENDPOINTS } from '../constants/endpoints'
import { LOCAL_STORAGE_TK } from '../constants/keys'
import { ReqErrValidation } from '../utils/requestValidator'

import { api } from './api'

export const loginRequest = (email, password) =>
  api.post(ENDPOINTS.LOGIN, { email, password })
    .then(async (res) => {
      const { token } = res.data
      await SecureStorage.setItemAsync(LOCAL_STORAGE_TK, token)
      return {
        error: '',
        statusCode: res.status,
      }
    })
    .catch(ReqErrValidation)