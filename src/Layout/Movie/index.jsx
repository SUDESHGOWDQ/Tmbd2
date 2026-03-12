import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieDetails} from '../../api/index';
import Trailer from '../Trailer'
import Cast from '../Cast'
import './index.css';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});


  useEffect(() => {
	  fetchMovieDetails(id)
	  .then(data => setMovie(data));
   },[id])  

   
  
  return (
  <div className="movie-details">
    <div className="movie-container">

      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
		  onError={(e) => {e.target.src = '/src/assets/fallbackImage.webp';}}
        />
      </div>

      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>

        <div className="movie-meta">
          <span>Release Date: {movie.release_date}</span>
          <span>Rating: ⭐ {movie.vote_average}</span>
        </div>
      </div>
	  <Trailer id={id}/>
	  <Cast id={id}/>
    </div>
  </div>
  );
};

export default MovieDetails;