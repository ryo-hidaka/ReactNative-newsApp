import { useSelector } from "react-redux";
import { StyleSheet, FlatList, SafeAreaView, Text } from "react-native";
import { ListItem } from "../componetnts/ListItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { State } from "../types/state";
import { User } from "../types/user";
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export const ClipScreen = (props: Props) => {
  const { navigation } = props;
  const user = useSelector((state: State) => state.user) as User;
  const { clips } = user;
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            urlToImage={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
