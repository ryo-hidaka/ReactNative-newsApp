import { Login } from "../../types/login";

export type LoginAction = {
  type: "LOGIN";
  flag: Login;
};

export const login = (flag: Login) => {
  return {
    type: "LOGIN",
    flag,
  };
};

export type LogoutAction = {
  type: "LOGOUT";
  flag: Login;
};

export const logout = (flag: Login) => {
  return {
    type: "LOGOUT",
    flag,
  };
};
