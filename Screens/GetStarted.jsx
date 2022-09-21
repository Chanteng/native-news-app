import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LottieView source={require("../Images/global.json")} autoPlay />
      <Text style={styles.text}>Hello! Welcome to TV3 News App</Text>
   
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
          <Text style={styles.btntxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {
    flex: 1,
    fontSize: 20,
    alignSelf: "center",
   marginTop: 70
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingTop: 20
  },
  btntxt: {
    fontSize: 20,
    backgroundColor: "red",
    height: 70,
    width: 150,
    padding: 20,
    color: "white",
    borderRadius: 20,
    fontWeight: "bold"
  }
});
