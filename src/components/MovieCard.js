import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-overview">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieCard;
