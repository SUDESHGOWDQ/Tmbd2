import axios from 'axios'

// Updated to use Vite-compatible environment variable prefixes
const api_key = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

async function fetchPopularMovies(page = 1){
	const response = await axios.get(`${baseUrl}movie/popular`,{
		params:{
			api_key: api_key,
			language: 'en-US',
			page: page
		}
	})
	const data = response.data;
	data.results = data.results.slice(0,6); 
	return data
}



async function fetchTrendingMovies(page = 1){
	const response = await axios.get(`${baseUrl}trending/movie/day`,{
		params:{
			api_key: api_key,
			language: 'en-US',
			page: page
		}
	})
	return response.data
}


async function searchMovies(query,page = 1){
	const response = await axios.get(`${baseUrl}search/movie`,{
		params:{
			api_key: api_key,
			language: 'en-US',
			query: query,
			page: page,
		}
	})
	const data = response.data;
	data.results = data.results.slice(0,6);
	return data
}

async function fetchMovieDetails (movieId) {
  const response = await axios.get(`${baseUrl}movie/${movieId}`, {
    params: {
      api_key: api_key,
      language: "en-US",
    },
  });
  return response.data;
}


async function fetchMovieTrailer (movieId) {
  const response = await axios.get(`${baseUrl}movie/${movieId}/videos`, {
    params: {
      api_key: api_key,
      language: "en-US",
    },
  });
  return response.data;
}

async function fetchMovieCast (movieId) {
  const response = await axios.get(`${baseUrl}movie/${movieId}/credits`, {
    params: {
      api_key: api_key,
      language: "en-US",
    },
  });
  return response.data;
}

async function fetchCastDetails (castId) {
  const response = await axios.get(`${baseUrl}person/${castId}`, {
	params: {
	  api_key: api_key,
	  language: "en-US",
	},
  });
  return response.data;
}

async function fetchMovieCredits(personId) {
  const response = await axios.get(`${baseUrl}person/${personId}/movie_credits`, {
    params: {
      api_key: api_key,
      language: "en-US",
    },
  });
  return response.data;
}



async function fetchUpcomingMovies(page=1) {
	const response = await axios.get(`${baseUrl}movie/upcoming`, {
		params: {
			api_key: api_key,
			language: "en-US",
			page: page,
		},
	});
	return response.data;
}

async function fetchMovieGenres() {
	const response = await axios.get(`${baseUrl}genre/movie/list`, {
		params: {
			api_key: api_key,
			language: "en-US",
		},
	});
	return response.data;
}

async function fetchMoviesByGenre(genreId, page = 1) {
	const response = await axios.get(`${baseUrl}discover/movie`, {
		params: {
			api_key: api_key,
			language: "en-US",
			with_genres: genreId,
			page: page,
		},
	});
	const data = response.data;
	data.results = data.results.slice(0, 6);
	return data;
}



export {
	fetchPopularMovies,
	searchMovies,
	fetchMovieDetails,
	fetchTrendingMovies,
	fetchUpcomingMovies,
	fetchMovieGenres,
	fetchMoviesByGenre,
	fetchMovieTrailer,
	fetchMovieCast,
	fetchCastDetails,
	fetchMovieCredits
}

