import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const url1 = "https://web.facebook.com/3newsgh/";
const url2 = "https://www.instagram.com/tv3_ghana/";
const url3 = "https://twitter.com/3NewsGH";
const url4 = "https://www.youtube.com/channel/UC9VSDs4ZXo3sjOoPkmW2iRQ";

const SocialMediaLink = (props) => {
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenUrl(url);
    if (isSupported) {
      await Linking.openUrl(url);
    } else {
      Alert.alert("Wrong: ${url}");
    }
  };

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url1);
          }}
        >
          <Entypo name="facebook" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url2);
          }}
        >
          <Entypo
            style={{ marginLeft: 30 }}
            name="instagram"
            size={24}
            color="red"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url3);
          }}
        >
          <Entypo style={{marginLeft: 30 }} name="twitter" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(url4);
          }}
        >
          <Entypo style={{marginLeft: 30 }} name="youtube" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMediaLink;

const styles = StyleSheet.create({});
