import React, { useState, useEffect, useCallback } from "react";
import { fetchPopularMovies, searchMovies,fetchTrendingMovies,fetchUpcomingMovies } from "../api";
import users from "../api/users.json";

const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {

  const [movie, setMovie] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      if (search) {
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
  }, [search, currentPage]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

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