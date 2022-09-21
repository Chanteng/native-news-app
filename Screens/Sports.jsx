import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,SafeAreaView, FlatList} from "react-native";
import Article from "../Component/Article";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';


const Sports = (props) => {
    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=845db4aa51d64d69ba55be62203c9cf4',{
            params:{
                category: "sports",
            }
        })
            .then( (response) =>{
                // handle success
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getNews();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
           <View style={{flexDirection: "row", marginTop:50, paddingHorizontal: 10, justifyContent: "center" }}>
           <Ionicons name="arrow-back" size={24} color="black"  onPress={() => props.navigation.goBack()} />
            <Text style={{fontSize: 20, marginLeft: 20}}>Welcome to Sports News</Text>
           </View>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url={item.url}
                    />}
                keyExtractor = {(item) => item.title}
            />

        </SafeAreaView>
    )
}

export default Sports;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
})