import { Article } from "../../types/article";
import { Actions, LoginActions, LoginState } from "../../types/state";
import { ClipActionTypes } from "../actions/types";
import { addClip } from "../actions/user";
import { User } from "../../types/user";
import { login } from "../actions/login";
import { Login } from "../../types/login";

const initialState: Login = {
  flag: true,
};

export const loginreducer = (state = initialState, action: LoginActions) => {
  console.log(state);
  switch (action.type) {
    case "LOGIN":
      return {
        flag: state,
      };

    default:
      return state;
  }
};
