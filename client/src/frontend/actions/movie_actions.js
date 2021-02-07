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

export const fetchMoviesByGenre = (genreId, page=1) => dispatch => 
  MovieAPIUtil.fetchMoviesByGenre(genreId, page).then(
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

export const fetchSearchResults = searchTerms => dispatch => 
  MovieAPIUtil.fetchSearchResults(searchTerms).then(({results}) => 
    dispatch(receiveMovies({searchResults: results})))

export const fetchMovie = (movieId) => dispatch =>
  MovieAPIUtil.fetchMovieTrailer(movieId).then(({results}) => {
    const video_key = results[0].key

    MovieAPIUtil.fetchMovie(movieId).then((movie) => 
      dispatch(receiveMovie(Object.assign({}, movie, {video_key: video_key}))
    )
  )
})