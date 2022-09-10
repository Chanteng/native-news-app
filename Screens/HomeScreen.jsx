import { StyleSheet, Text, View, Scroll, ScrollView } from "react-native";
import React, {useEffect, useState} from "react";
import Article from "../Component/Article";
import axios from "axios"

const HomeScreen = () => {

    const [article, setArticle] = useState([]);

  const getNews = () => {
    // Make a request for a user with a given ID
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=845db4aa51d64d69ba55be62203c9cf4", {
        params: {
            category: "technology"
        }
      })
      .then((response)=> {
        // handle success
        console.log(response.data);
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
},[] )
  return (
    <ScrollView style={styles.container}>
      <Article />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
