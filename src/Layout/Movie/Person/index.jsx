import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastDetails, fetchMovieCredits } from '../../../api';
import MovieCreditsLayout from './MovieCreditsLayout';
import './index.css';

const PersonDetails = () => {
  const { id } = useParams();

  const [person, setPerson] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getPersonDetails = async () => {
      try {
        const data = await fetchCastDetails(id);
        setPerson(data);
      } catch {
        setError('Failed to fetch person details.');
      } finally {
        setLoading(false);
      }
    };

    const getMovieCredits = async () => {
      try {
        const credits = await fetchMovieCredits(id);
        setMovies(credits.cast || []);
      } catch {
        setError('Failed to fetch movie credits.');
      }
    };

    getPersonDetails();
    getMovieCredits();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  console.log('Movies fetched:', movies);

  return (
    <div className="person-details">
      <h1>{person?.name}</h1>
      <img
        src={person?.profile_path ? `${IMAGE_BASE_URL}${person.profile_path}` : "/fallback.jpg"}
        alt={person?.name}
        className="person-image"
      />
      <p><strong>Biography:</strong> {person?.biography || 'No biography available.'}</p>
      <p><strong>Birthday:</strong> {person?.birthday || 'N/A'}</p>
      <p><strong>Place of Birth:</strong> {person?.place_of_birth || 'N/A'}</p>
      <p><strong>Known For:</strong> {person?.known_for_department || 'N/A'}</p>

      <MovieCreditsLayout movies={movies} IMAGE_BASE_URL={IMAGE_BASE_URL} />
    </div>
  );
};

export default PersonDetails;