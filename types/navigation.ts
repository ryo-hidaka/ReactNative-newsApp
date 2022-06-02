import { Article } from "./article";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Clip: undefined;
  LoginHome: undefined;
  MainStack: undefined;
  Article: { article: Article };
};
