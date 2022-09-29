import react, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../Component/SearchBar";
import axios from "axios";
import Article from "../Component/Article";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);

  const searchArticles = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=845db4aa51d64d69ba55be62203c9cf4",
        {
          params: {
            //    category: "technology",
            q: searchText,
          },
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
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, alignSelf: "center", marginTop: 50,  color: "red",
            fontWeight: "bold" }}>
       Search for your News
      </Text>
      <View style={{paddingHorizontal: 16, marginTop: 30,}}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />
      </View>
     
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
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
});
