export type AuthSuccess = {
  success: true
  authToken: string
}

export type AuthFail = {
  success: false
  message: unknown
}
