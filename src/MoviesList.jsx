import './MoviesList.css';
import poster from './Trailerposter.svg';
import theatre from './theatreposter.svg';
import React, { useState } from 'react';
import trailer from './playlogo.svg';
const MoviesList = () => {
  const movies = [
    {
      id: 1,
      poster: poster,
      name: 'Star',
      language: 'Tamil'
    },
    {
      id: 2,
      poster: poster,
      name: 'Star',
      language: 'Tamil'
    },
    {
      id: 3,
      poster: poster,
      name: 'Star',
      language: 'Tamil'
    }
  ];

  const upcomingMovies = [
    {
      id: 1,
      poster: poster,
      name: 'Upcoming Stars',
      language: 'Tamil'
    },
    {
      id: 2,
      poster: poster,
      name: 'Mega Star',
      language: 'English'
    },
    {
      id: 3,
      poster: poster,
      name: 'Little Star',
      language: 'English'
    },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? upcomingMovies.length - 1 : newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= upcomingMovies.length ? 0 : newIndex;
    });
  };

  return (
    <div className="movies-list">
      <div className='movies-div'>
        <h1 className='Movies'>CINEMAS</h1>
        <h3 className='moviesss'> Now Showing</h3>
      </div>
      <div className='flexx'>
        {movies.map(movie => (
          <div key={movie.id} className="movie-container">
            <img src={movie.poster} alt={`${movie.name} Poster`} className="movie-posterr" />
            <div className="flex">
              <h2 className="movie-name">{movie.name}</h2>
              <p className="movie-language">{movie.language}</p>
            </div>
            <button
  className="book-button"
  onClick={() => window.location.href = "https://colab.research.google.com/drive/1TPdU7u2MC4PKRZVNpRYJotyvT5viIg7K#scrollTo=hcQy7bI5ddfE"}
>
  Book Ticket
</button>

          </div>
        ))}
        <img src={theatre} alt="Theatre Poster" />
        <div className="upcoming-movies">
          <h2>Upcoming Movies</h2>
          <div className="upcoming-movies-container">
            <button className="arrow-button left" onClick={handlePrevClick}>&lt;</button>
            <div className="upcoming-movie-wrapper" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
              {upcomingMovies.map((movie, index) => (
                <div key={movie.id} className={`upcoming-movie-container ${index >= currentIndex && index < currentIndex + 4 ? '' : 'hidden'}`}>
                  <img src={movie.poster} alt={`${movie.name} Poster`} className="movie-poster" />
                  <div className="flex">
                    <h2 className="movie-namess">{movie.name}</h2>
                    <p className="movie-language">{movie.language}</p>
                  </div>
                  <div className="centre-button">
                  <button className="play-trailer">
            <img src={trailer} alt="Play Trailer" className="trailer-logo" />
            Play Trailer
          </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="arrow-button right" onClick={handleNextClick}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
