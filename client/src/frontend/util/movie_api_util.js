import $ from 'jquery'

export const fetchGenreList = () => 
  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e9eda2e3cdaed9db48b1d94102fe9602&language=en-US',
  })

export const fetchMoviesByGenre = (genreInt) =>
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=e9eda2e3cdaed9db48b1d94102fe9602&language=en-US&with_genres=${genreInt}`
  })