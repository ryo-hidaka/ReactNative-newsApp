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
import { ClipScreen } from "../screens/ClipScreen";

import { RootStackParamList } from "../types/navigation";
import {  StyleSheet } from "react-native";
import { Authentication } from "../componetnts/Authentication";
import { useSelector } from "react-redux";
import { LoginState } from "../types/state";
import { Login } from "../types/login";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

type Props = {
  route: RouteProp<RootStackParamList>;
};
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clip"
        component={ClipScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};
const screenOption = ({ route }: Props): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color, size }) => {
    console.log(route);
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
const loginFlag = useSelector((state: LoginState) => state.flag) as Login;

export const AppNagigator = () => {
  return (
    <>
      {loginFlag ? (
          <Authentication></Authentication>
      ) : (
        <NavigationContainer>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Clip" component={ClipStack} />
        </Tab.Navigator>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Article" component={ArticleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      )}
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
