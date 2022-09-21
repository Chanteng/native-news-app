import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Headline = ({navigation}) => {
  return (
    <ScrollView 
    horizontal= {true}
    >
      <View style={{flexDirection: "row"}}>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate("Business")}>
        <Text style={{fontSize: 25}}>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Entertainment")}>
        <Text style={{fontSize: 25}}>Entertainment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Health")}>
        <Text style={{fontSize: 25}}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Science")}>
        <Text style={{fontSize: 25}}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sports")}>
        <Text style={{fontSize: 25}}>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Tech")}>
        <Text style={{fontSize: 25}}>Technology</Text>
      </TouchableOpacity>
      </View>
        
      </View>
      
    </ScrollView>
  )
}

export default Headline

const styles = StyleSheet.create({
  txt: {
    fontSize: 50
  }
})