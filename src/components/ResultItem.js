import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultItem = ({ result }) => {
    return <View style={styles.viewStyle}>
        <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
        <Text style={styles.titleStyle}>{result.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{result.rating} Stars</Text>
            <Text>{result.review_count} Reviews</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 15
    },
    titleStyle: {
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    }
});

export default ResultItem;