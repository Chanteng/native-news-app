import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Article = () => {
  return (
   <SafeAreaView style={styles.container}>
    <Image source={{
        uri: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }} 
    style={styles.img}
    />

    {/* title */}
    <Text style={styles.title}>News App </Text>

 {/* description */}
 <Text style={styles.text}>Watch Out </Text>

   </SafeAreaView>
  )
}

export default Article

const styles = StyleSheet.create({
    container: {
        width: "98%",
        alignSelf: "center"
    },

    img: {
        height: 200,
        width: "100%"
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
    }
})