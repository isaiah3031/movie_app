import $ from 'jquery'
const { REACT_APP_API_KEY } = process.env

export const fetchGenreList = () => 
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${ REACT_APP_API_KEY }&language=en-US`,
  })

export const fetchMoviesByGenre = (genreId, page) =>
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${ REACT_APP_API_KEY }&language=en-US&with_genres=${genreId}&page=${page}`,
  })

export const fetchFeaturedMovies = () =>
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${ REACT_APP_API_KEY }&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`,
  })

export const fetchMovie = (movieId) => 
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ REACT_APP_API_KEY }&language=en-US&include_video=true`,
  })

export const fetchSearchResults = (searchTerm) =>
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${ REACT_APP_API_KEY }&language=en-US&query=${createQueryString(searchTerm)}&page=1&include_adult=false`
  })

export const fetchMovieTrailer = (movieId) =>
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${ REACT_APP_API_KEY }&language=en-US&type=trailer`,
  })

const createQueryString = (searchTerm) => {
  return searchTerm.split(' ').join('%20')
}