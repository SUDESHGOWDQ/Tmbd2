import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Movie.css';

const MovieCreditsLayout = ({ movies, IMAGE_BASE_URL }) => {

	const navigate = useNavigate();

  return (
    <div className="movie-credits">
      <h2>Movies</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "/fallback.jpg"}
              alt={movie.title}
              className="movie-poster"
			  onClick={()=>navigate(`/movie/${movie.id}`)}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCreditsLayout;