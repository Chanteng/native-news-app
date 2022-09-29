import { StyleSheet, Text, View, Image, Button} from "react-native";
import React from "react";
import SocialMediaLink from "../Component/SocialMediaLink"
import LottieView from "lottie-react-native";


const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={{ height: 70, width: 200, marginTop: 20 }}
          source={require("../Images/LOGO.png")}
        />
        {/* <Text style={{fontSize: 30, fontWeight: "bold", marginTop: 20 }} >TV3 NEWS</Text> */}
      </View>

      <View style={{ flex: 0.3 }}>
        <Text style={{ fontSize: 24 }}>
          3news App is the fastest growing news portal in Ghana. Get all
          breaking news updates, latest news headlines, local and world stories,
          showbiz, lifestyle etc.
        </Text>
      </View>
      <View style={{ flex: 0.2 }}>
        <Text style={{ alignSelf: "center", fontSize: 24, fontWeight: "bold" }}>
          FOLLOW US ON:
        </Text>
        <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20 }} >
        <SocialMediaLink />
        </View>
        <View style={{ flex: 0.3, alignSelf: "center" }} >
        <LottieView style={{height: 300}} source={require("../Images/connect.json")} autoPlay />
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  head: {
    flex: 0.2,
    flexDirection: "row",
    alignSelf: "center",
  },
});
