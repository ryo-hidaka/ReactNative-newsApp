import React from "react";
import { Provider } from "react-redux";
import { AppNagigator } from "./navigation/AppNavigator";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "react-native-gesture-handler";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNagigator />
      </PersistGate>
    </Provider>
  );
}
