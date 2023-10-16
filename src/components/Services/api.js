import axios from 'axios';
const API_KEY = 'b9ef7946a51322c370f5716b1574be31';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/all/day`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews`);
  return data;
};
