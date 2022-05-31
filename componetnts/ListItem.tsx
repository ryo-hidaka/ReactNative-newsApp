import { StatusBar } from "expo-status-bar";
import { VFC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Article } from "../types/article";
import { NewsItme } from "../types/newsItme";

export const ListItem: VFC<Article> = ({ urlToImage, title, author }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        {!!urlToImage && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: urlToImage }}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },

  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
