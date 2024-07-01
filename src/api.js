import axios from 'axios';

const API_KEY = '2dca580c2a14b55200e784d157207b4d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByYear = async (year, genreId = null) => {
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100`;
    if (genreId) {
        url += `&with_genres=${genreId}`;
    }
    const response = await axios.get(url);
    return response.data.results;
};

export const fetchGenres = async () => {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.genres;
};
