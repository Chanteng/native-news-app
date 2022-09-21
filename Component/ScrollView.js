import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native-web';

const ScrollView = () => {

    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(()=>{
        getListPhotos();
        return () => {
            cleanup
        }
    }, [])


    getListPhotos = () => {
        const apiUrl = ''
        fetch(apiUrl)
        .then((res) => res.json(1))
        .then((resJson) => {
            setData(resJson);
        }).catch((error) => {
            console.log('Error: ', error);
        }).finally(()=> setisLoading(false))
    }

  return (
   <SafeAreaView style={styles.container}>
    {isLoading ? <ActivityIndicator /> : (
        <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `key-$(item.id)`}
        />
    )}

    <TouchableOpacity style={styles.wrapButton} >

    </TouchableOpacity>


   </SafeAreaView>
  )
}

export default ScrollView

const styles = StyleSheet.create({})