import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultItem from './ResultItem';

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }

    return <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={results} keyExtractor={r => r.id} renderItem={({ item }) => {
            return (<TouchableOpacity onPress={() => navigation.navigate('ResultDetail', { id: item.id })}>
                <ResultItem result={item} />
            </TouchableOpacity>);
        }} />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom: 15
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);