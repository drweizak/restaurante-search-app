import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useSearchResults';
import ResultsList from '../components/ResultList';

const SearchScreen = () => {
    const [search, setSearch] = useState('');
    const [searchResults, results, error] = useResults();

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <SearchBar
                value={search}
                onValueChange={setSearch}
                onSearchSubmit={() => searchResults(search)} />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList title="Cost Effective" results={results.filter(r => r.price === '$')} />
                <ResultsList title="Bit Pricier" results={results.filter(r => r.price === '$$')} />
                <ResultsList title="Big Spender" results={results.filter(r => r.price === '$$$' || r.price === '$$$$')} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;