import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Article from '../Component/Article'

const HomeScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
    <Article />
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})