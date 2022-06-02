import { combineReducers } from "redux";
import { reducer } from "./reducers/user";
import { loginreducer } from "./reducers/login";

export const RootReducer = combineReducers({
  user: reducer,
  login: loginreducer,
});

export type RootState = ReturnType<typeof RootReducer>;
