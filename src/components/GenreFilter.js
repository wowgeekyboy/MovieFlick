import React, { useState, useEffect } from 'react';
import { fetchGenres } from '../api';
import './styles/GenreFilter.css';

const GenreFilter = ({ selectedGenres, setSelectedGenres }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const loadGenres = async () => {
            const genres = await fetchGenres();
            setGenres(genres);
        };
        loadGenres();
    }, []);

    const handleGenreChange = (genreId) => {
        if (selectedGenres.includes(genreId)) {
            setSelectedGenres(selectedGenres.filter(id => id !== genreId));
        } else {
            setSelectedGenres([...selectedGenres, genreId]);
        }
    };

    return (
        <div className="genre-filter">
            {genres.map(genre => (
                <div key={genre.id}>
                    <input
                        type="checkbox"
                        id={`genre-${genre.id}`}
                        value={genre.id}
                        onChange={() => handleGenreChange(genre.id)}
                    />
                    <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
                </div>
            ))}
        </div>
    );
};

export default GenreFilter;