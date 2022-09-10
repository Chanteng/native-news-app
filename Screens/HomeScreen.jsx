import { StyleSheet, Text, View, Scroll, ScrollView } from "react-native";
import React, {useState} from "react";
import Article from "../Component/Article";

const HomeScreen = () => {

    const [article, setArticle] = useState([]);

  const getNews = () => {
    // Make a request for a user with a given ID
    axios
      .get("/user?ID=12345")
      .then(function (response) {
        // handle success
        console.log(response);
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
    <ScrollView style={styles.container}>
      <Article />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
