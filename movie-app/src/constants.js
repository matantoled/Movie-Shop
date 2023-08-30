// constants.js

const API_KEY = "07ef52e04c96caa109aa075927f7841b";

export const API_BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const GENRE_LIST_URL = `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const SEARCH_URL = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`;
export const DISCOVER_URL = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false`;
export const PRICE = 3.99;