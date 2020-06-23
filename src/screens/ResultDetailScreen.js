import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultDetialScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async () => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Text>{result.name}</Text>
            <FlatList data={result.photos} keyExtractor={photo => photo} renderItem={({ item }) => {
                return <Image style={styles.imageStyle} source={{ uri: item }} />
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300
    }
});

export default ResultDetialScreen;