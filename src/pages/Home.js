import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import GenreTabs from '../components/GenreTabs';
import MovieList from '../components/MovieList';
import '../styles/Home.css';

const Home = () => {
    const [year, setYear] = useState(2012);
    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleScroll = (e) => {
        if (e.deltaY < 0 && year > 2010) {
            setYear(year - 1);
        } else if (e.deltaY > 0 && year < new Date().getFullYear()) {
            setYear(year + 1);
        }
    };

    return (
        <div className="home" onWheel={handleScroll}>
            <Navbar />
            <GenreTabs selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <MovieList year={year} genreId={selectedGenre} />
        </div>
    );
};

export default Home;