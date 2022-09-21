import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

const Headline = ({navigation}) => {
  return (
    
   <View style={{flex: 1,}}>
    <Text style={{fontSize: 30, alignSelf: "center", marginVertical: 30, color: "red", fontWeight: "bold" }}>Headlines</Text>
    <Text style={{fontSize: 25, marginBottom: 20, fontWeight: "300"}}>Please select of the category:</Text>
      <View style={{flex: 1, flexDirection: "row", paddingHorizontal: 20}}>
      <View style={{flex: 0.5}}>
      <TouchableOpacity onPress={() => navigation.navigate("Business")}>
        <Text style={{fontSize: 25,}}>Business</Text>
        <Text style={{fontSize: 16, fontWeight: "100", color: "green" }}>Click here for Business news only</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Entertainment")}>
        <Text style={{fontSize: 25, marginTop: 25}}>Entertainment</Text>
        <Text style={{fontSize: 16, fontWeight: "100", color: "green" }}>Click here for Entertainment news only</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Health")}>
        <Text style={{fontSize: 25, marginTop: 25}}>Health</Text>
        <Text style={{fontSize: 16, fontWeight: "100", color: "green" }}>Click here for Health news only</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Science")}>
        <Text style={{fontSize: 25, marginTop: 25}}>Science</Text>
        <Text style={{fontSize: 16, fontWeight: "100", color: "green" }}>Click here for Science news only</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sports")}>
        <Text style={{fontSize: 25, marginTop: 25}}>Sports</Text>
        <Text style={{fontSize: 16, fontWeight: "100", color: "green" }}>Click here for Sports news only</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Tech")}>
        <Text style={{fontSize: 25, marginTop: 25}}>Technology</Text>
        <Text style={{fontSize: 16, fontWeight: "100", color: "green" }}>Click here for Technology news only</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex: 0.5}}>
      <LottieView style={{height: 200}} source={require("../Images/business.json")} autoPlay />
      <LottieView style={{height: 200}} source={require("../Images/health.json")} autoPlay />
      <LottieView style={{height: 200}} source={require("../Images/business-growth.json")} autoPlay />
      </View>
      
      </View>
   </View>
  )
}

export default Headline

const styles = StyleSheet.create({
  txt: {
    fontSize: 50
  }
})