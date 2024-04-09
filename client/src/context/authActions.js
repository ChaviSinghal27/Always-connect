export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  Payload: user,
});

export const LoginFail = (error) => ({
  type: "LOGIN_FAIL",
  Payload: error,
});
