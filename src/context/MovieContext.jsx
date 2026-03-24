import React, { useState, useEffect, useCallback } from "react";
import {
  fetchPopularMovies,
  searchMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchMovieGenres,
  fetchMoviesByGenre,
} from "../api";
import users from "../api/users.json";

const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {

  const [movie, setMovie] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      if (selectedGenre) {
        const d = await fetchMoviesByGenre(selectedGenre, currentPage);
        setMovie(d.results);
        setTotalPages(d.total_pages);
      } else if (search) {
        const d = await searchMovies(search, currentPage);
        setMovie(d.results);
        setTotalPages(d.total_pages);
      } else {
        const d = await fetchPopularMovies(currentPage);
        setMovie(d.results);
        setTotalPages(d.total_pages);
      }

      await fetchTrendingMovies(currentPage).then((d) => {
        setTrendingMovies(d.results);
        setTotalPages(d.total_pages);
      });

      await fetchUpcomingMovies(currentPage).then((d) => {
        setUpcomingMovies(d.results);
        setTotalPages(d.total_pages);
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, [search, selectedGenre, currentPage]);

  const fetchGenres = useCallback(async () => {
    try {
      const d = await fetchMovieGenres();
      setGenres(d.genres || []);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedGenre]);

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  const login = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <MovieContext.Provider
      value={{
        movie,
		trendingMovies,
		upcomingMovies,
    genres,
    selectedGenre,
    setSelectedGenre,
        search,
        setSearch,
        currentPage,
        totalPages,
        handleNext,
        handlePrev,
        setMovie,
		loading,
        isAuthenticated,
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext };