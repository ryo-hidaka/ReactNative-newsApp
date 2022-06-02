import { StyleSheet, Text, View, Button } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Login } from "../types/login";
import { LoginState } from "../types/state";
import { login, logout } from "../store/actions/login";
import React, { Component } from "react";
import { AppNagigator } from "../navigation/AppNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { HomeScreen } from "./HomeScreen";
import {
  NavigationContainer,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { RootState } from "../store/RootReducer";

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
};

export const AuthenticationScreen = (props: Props) => {
  const { navigation } = props;
  const loginFlag = useSelector((state: RootState) => state.login) as Login;
  const dispatch = useDispatch();
  // dispatch(login(loginFlag));

  const upportAuthentication = async () => {
    const result =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    alert(result);
  };

  const checkDeviceForHardware = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible) {
      alert("有効なデバイスです");
    } else {
      alert("無効なデバイスです");
    }
  };

  const checkForBiometrics = async () => {
    const biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (biometricRecords) {
      alert("生体認証有効");
    } else {
      alert("生体認証無効");
    }
  };

  const handleAuthentication = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "認証を促すメッセージ",
      cancelLabel: "キャンセルラベル",
      fallbackLabel: "認証失敗時のメッセージ",
      disableDeviceFallback: false,
    });
    if (result.success) {
      // alert("認証成功");
      // const loginFlag = useSelector((state: RootState) => state.login)as Login;

      // dispatch(login(loginFlag));
      // navigation.navigate("MainStack");
      // //遷移先
      // console.log(loginFlag);

      navigation.navigate("MainStack")
    } else {
      LocalAuthentication.cancelAuthenticate();
      alert("認証失敗");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Local authentication</Text>
      <Button title="デバイスチェック" onPress={checkDeviceForHardware} />
      <Button title="生体認証チェック" onPress={checkForBiometrics} />
      <Button title="認証サポートチェック" onPress={upportAuthentication} />
      <Button title="認証チェック" onPress={handleAuthentication} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
