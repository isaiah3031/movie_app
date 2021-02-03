import $ from 'jquery'

export const fetchGenreList = () => 
  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e9eda2e3cdaed9db48b1d94102fe9602&language=en-US',
  })

export const fetchMoviesByGenre = (genreId) =>
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=e9eda2e3cdaed9db48b1d94102fe9602&language=en-US&with_genres=${genreId}`
  })

export const fetchFeaturedMovies = () =>
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=e9eda2e3cdaed9db48b1d94102fe9602&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`
  })

export const fetchMovie = (movieId) => 
  $.ajax({
    type: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9eda2e3cdaed9db48b1d94102fe9602&language=en-US`
  })