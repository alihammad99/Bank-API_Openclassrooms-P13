import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_TOKEN,
  AuthActionTypes,
} from "../constants";

export const loginRequest = (): AuthActionTypes => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (
  token: string,
  rememberMe: boolean
): AuthActionTypes => {
  if (rememberMe) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailure = (error: string): AuthActionTypes => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});

export const updateToken = (token: string): AuthActionTypes => ({
  type: UPDATE_TOKEN,
  payload: token,
});
