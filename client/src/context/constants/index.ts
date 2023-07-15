export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN";

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string; // token
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // error message
}

interface LogoutAction {
  type: typeof LOGOUT;
}
interface UpdateToken {
  type: typeof UPDATE_TOKEN;
  payload: string;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | UpdateToken
  | LogoutAction;
