import { combineReducers, createStore } from "redux";
import { reducer } from "./reducers/user";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import { AsyncStorage } from "react-native";
const rootReducer = combineReducers({
  user: reducer,
});
const persistCOnfig = {
  key: "root",
  storage: AsyncStorage,
  whilelist: ["user"],
};
const persistedReducer = persistReducer(persistCOnfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;
