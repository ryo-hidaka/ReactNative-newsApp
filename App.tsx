import React from "react";
import { Provider } from "react-redux";
import { AppNagigator } from "./navigation/AppNavigator";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { Authentication } from "./componetnts/Authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
export default function App() {
  return (
    <Provider store={store}>
        {/* <SafeAreaView style={styles.container}>
          <Authentication></Authentication>
        </SafeAreaView> */}
        <AppNagigator />
    </Provider>
  );
}
registerRootComponent(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
});
