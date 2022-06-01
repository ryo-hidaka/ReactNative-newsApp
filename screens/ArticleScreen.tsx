import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { WebView } from "react-native-webview";
import { RootStackParamList } from "../types/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";
import { ClipButton } from "../componetnts/ClipButton";
import { FlatList, Platform } from "react-native";
import Constants from "expo-constants";
import { User } from "../types/user";
import { State } from "../types/state";
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Article">;
  route: RouteProp<RootStackParamList, "Article">;
};

export const ArticleScreen = ({ navigation, route }: Props) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user) as User;
  const { clips } = user;
  const isClipped = () => {
    return clips.some((clipe) => clipe.url === article.url);
  };
  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };
  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{ uri: article.url }} />
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100dvh",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
