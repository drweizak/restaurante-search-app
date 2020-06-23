import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 48nk1kKUa0QoxvlzF44M8niSxjSuloXk9SABT8FjvT0fmxjbEqs2M44NW245w24stffEDuewzMCpb4i3XDKm2hHKMGvyLJMPjeTfejyb5YBacHocbr0K4I5K4p_wXnYx'
    }
});