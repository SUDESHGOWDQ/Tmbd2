import axios from 'axios'

const api_key = "ab1da08307f82007e9975d4dccf67670"
const baseUrl = "https://api.themoviedb.org/3/"

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



async function fetchUpcomingMovies() {
	const response = await axios.get(`${baseUrl}movie/upcoming`, {
		params: {
			api_key: api_key,
			language: "en-US",
		},
	});
	return response.data;
}



export {
	fetchPopularMovies,
	searchMovies,
	fetchMovieDetails,
	fetchTrendingMovies,
	fetchUpcomingMovies,
	fetchMovieTrailer,
	fetchMovieCast
}

