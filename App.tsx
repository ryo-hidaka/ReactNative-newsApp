import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import axios from "axios";
import { ListItem } from "./componetnts/ListItem";
import dummyArticles from "./dummies/articles.json";
import Constants from "expo-constants";
import { Article } from "./types/article";
import { AllArticles } from "./types/allArticles";
export default function App() {
  const [articles, setArticles] = useState<Array<Article>>(dummyArticles);
  const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    axios
      .get(URL)
      .then((res) => {
        setArticles(res.data.articles);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            urlToImage={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
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
