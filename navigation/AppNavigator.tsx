import React, { ComponentProps } from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { HomeScreen } from "../screens/HomeScreen";
import { ArticleScreen } from "../screens/ArticleScreen";
import { AuthenticationScreen } from "../screens/AuthenticationScreen";
import { ClipScreen } from "../screens/ClipScreen";

import { RootStackParamList } from "../types/navigation";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Authentication } from "../componetnts/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../types/state";
import { Login } from "../types/login";
import { login } from "../store/actions/login";
import { RootReducer, RootState } from "../store/RootReducer";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator<RootStackParamList>();

type Props = {
  route: RouteProp<RootStackParamList>;
};

const HomeStack = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <RootStack.Screen name="MainStack" component={Main} />
      <RootStack.Screen name="Login" component={AuthenticationScreen} />
    </RootStack.Navigator>
  );
};
const Main = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{ headerShown: false }}
    //   />
    //   <Stack.Screen name="Article" component={ArticleScreen} />
    // </Stack.Navigator>

    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Article" component={ArticleScreen} />
    </MainStack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Clip"
        component={ClipScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Article" component={ArticleScreen} />
    </MainStack.Navigator>
  );
};

const screenOption = ({ route }: Props): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color, size }) => {
    type GlyphNames = ComponentProps<typeof FontAwesome>["name"];
    let iconName: GlyphNames;
    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "Clip") {
      iconName = "bookmark";
    }
    // You can return any component that you like here!
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export const AppNagigator = () => {
  const loginFlag = useSelector((state: RootState) => state.login) as Login;
  console.log(loginFlag);

  return (
    <>
      {/* {loginFlag ? (
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
          >
            <RootStack.Screen name="MainStack" component={Main} />
            <RootStack.Screen name="Login" component={AuthenticationScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      ) : ( */}
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOption}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Clip" component={ClipStack} />
          </Tab.Navigator>
        </NavigationContainer>
      {/* )} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
});
