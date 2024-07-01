import React, { useState, useEffect } from 'react';
import { fetchMoviesByYear } from '../api';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ year, genreId }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const movies = await fetchMoviesByYear(year, genreId);
            setMovies(movies);
        };
        loadMovies();
    }, [year, genreId]);

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;