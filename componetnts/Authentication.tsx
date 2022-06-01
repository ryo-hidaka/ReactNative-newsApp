import { StyleSheet, Text, View, Button } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../types/login";
import { LoginState } from "../types/state";
import { login } from "../store/actions/login";

export const Authentication = () => {
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
      alert("認証成功");
      const loginFlag = useSelector((state: LoginState) => state.flag) as Login;
      const dispatch = useDispatch();

      dispatch(login(loginFlag));
    } else {
      LocalAuthentication.cancelAuthenticate();
      alert("認証失敗");
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <Text>Local authentication</Text>
        <Button title="デバイスチェック" onPress={checkDeviceForHardware} />
        <Button title="生体認証チェック" onPress={checkForBiometrics} />
        <Button title="認証サポートチェック" onPress={upportAuthentication} /> */}
        <Button title="認証チェック" onPress={handleAuthentication} />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
