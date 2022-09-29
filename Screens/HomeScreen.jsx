import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import Article from "../Component/Article";
import axios from "axios";

const HomeScreen = (navigation) => {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=845db4aa51d64d69ba55be62203c9cf4",
        {
          // params:{
          //     category: "technology",
          // }
        }
      )
      .then((response) => {
        // handle success
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.2, }}>
        <Text
          style={{
            fontSize: 25,
            alignSelf: "center",
            marginTop: 50,
            color: "red",
            fontWeight: "bold"
          }}
        >
          Welcome to 3News App
        </Text>
      </View>
      <View style={{ flex: 0.8 }}>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <Article
              urlToImage={item.urlToImage}
              title={item.title}
              description={item.description}
              author={item.author}
              publishedAt={item.publishedAt}
              sourceName={item.source.name}
              url={item.url}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
