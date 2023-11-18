import type { AxiosError } from 'axios'

export const ReqErrValidation = (err: AxiosError) => {
  return {
    error: err?.response?.data,
    data: undefined,
    statusCode: err.status || err.code || 500
  }
}