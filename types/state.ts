import { AddClipAction, DeleteClipAction } from "../store/actions/user";
import { LoginAction,LogoutAction } from "../store/actions/login";
import { User } from "./user";
import { Login } from "./login";

export interface State {
  user: User;
}

export interface LoginState {
  flag: Login;
}

export type Actions =
  // user
  AddClipAction | DeleteClipAction;

export type LoginActions =
  // user
  LoginAction |LogoutAction;
