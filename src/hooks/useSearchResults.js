import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchResults = async searchValue => {
        setError('');
        try {
            const response = await yelp.get('/search', { params: { term: searchValue, limit: 50, location: 'san jose' } });
            setResults(response.data.businesses);
        } catch (e) {
            setError('Something went wrong');
        }
    }

    useEffect(() => {
        searchResults();
    }, []);

    return [searchResults, results, error]
}