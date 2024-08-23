import React from 'react';
import './MovieCard.css';
import trailerLogo from './playlogo.svg'; // replace with the actual path to your trailer logo
import Trailer from "./Trailerposter.svg";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <div className="movie-poste-card">
        <img src={Trailer} alt="Movie Poster" />
      </div>
      <div className="movie-details-card">
        <h1 className="movie-name-card">Star</h1>
        <p className="starring-card">
          <p className='starringcolor-card'>Starring:</p>
          <p>Kavin, Lal, Aditi Pohankar, Preity Mukhundhan</p>
        </p>
        <p className="directed-by-card">
          <p className='directed-by-color-card'>Directed by:</p>
          <p>Sridhar</p>
        </p>
        <div className="buttons-card">
          <button className="play-trailers-card">
            <img src={trailerLogo} alt="Play Trailer" className="trailer-logo-card" />
            Play Trailer
          </button>
          <button className="book-ticket-card">Book Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;