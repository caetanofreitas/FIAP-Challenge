export const ReqErrValidation = (err) => {
  console.error(err)
  return {
    error: err?.response?.data,
    data: undefined,
    statusCode: err.status || err.code || 500
  }
}