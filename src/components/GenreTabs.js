import React, { useState, useEffect } from 'react';
import { fetchGenres } from '../api';
import '../styles/GenreTabs.css';

const GenreTabs = ({ selectedGenre, setSelectedGenre }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const loadGenres = async () => {
            const genres = await fetchGenres();
            setGenres(genres);
        };
        loadGenres();
    }, []);

    return (
        <div className="genre-tabs">
            {genres.map(genre => (
                <div
                    key={genre.id}
                    className={`genre-tab ${selectedGenre === genre.id ? 'active' : ''}`}
                    onClick={() => setSelectedGenre(genre.id)}
                >
                    {genre.name}
                </div>
            ))}
        </div>
    );
};

export default GenreTabs;