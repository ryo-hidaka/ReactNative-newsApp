import { combineReducers, createStore } from "redux";
import { reducer } from "./reducers/user";
import { loginreducer } from "./reducers/login";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import { AsyncStorage } from "react-native";
import { RootReducer } from "./RootReducer";
// const rootReducer = combineReducers({
//   rootReducer
// });
// const persistCOnfig = {
//   key: "root",
//   storage: AsyncStorage,
//   whilelist: ["user"],
// };
// const persistedReducer = persistReducer(persistCOnfig, RootReducer);

// const store = createStore(persistedReducer, composeWithDevTools());
// export const persistor = persistStore(store);
const store = createStore(RootReducer);

export default store;
