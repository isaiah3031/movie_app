import * as types from '../constants/action_types'
import * as MovieAPIUtil from '../util/movie_api_util'

export const receiveMovie = movie => ({
  type: types.RECEIVE_MOVIE,
  movie
})

export const receiveMovies = movies => ({
  type: types.RECEIVE_MOVIES,
  movies
})

export const receiveGenres = genres => ({
  type: types.RECEIVE_GENRES,
  genres
})

export const fetchMoviesByGenre = (genreId) => dispatch => 
  MovieAPIUtil.fetchMoviesByGenre(genreId).then(
    (movies) => 
      dispatch(receiveMovies({[genreId]: movies.results})
      )
    )   

export const fetchFeaturedMovies = () => dispatch =>
  MovieAPIUtil.fetchFeaturedMovies().then(
    (movies) => 
      dispatch(receiveMovies({'featured': movies.results})
      )
    ) 

export const fetchGenreList = () => dispatch =>
  MovieAPIUtil.fetchGenreList().then(
    (genres) => 
      dispatch(receiveGenres(genres.genres)
    )
  )

export const fetchMovie = (movieId) => dispatch =>
  MovieAPIUtil.fetchMovie(movieId).then(
    (movie) => dispatch(receiveMovie(movie)
    )
  )