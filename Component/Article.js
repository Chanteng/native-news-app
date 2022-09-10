import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={styles.img}
      />

      <View style={{ padding: 20 }}>
        {/* title */}
        <Text style={styles.title}>News App </Text>

        {/* description */}
        <Text style={styles.text}>Watch Out </Text>

        {/* data */}
        <View style={styles.data}>
          <Text style={styles.heading}>
            By: <Text style={styles.author}>OIS</Text>{" "}
          </Text>
          <Text style={styles.date}>10th Sept. 22</Text>
        </View>

        {/* source */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.source}>Programming</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
    marginTop: 20,
  },

  img: {
    height: 200,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 15,
  },
  source: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
