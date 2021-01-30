import MovieIndex from './movie_index'
import { connect } from 'react-redux'
import {fetchGenreList} from '../../actions/movie_actions'

const mapStateToProps = state => ({
  movies: state.entities.movies,
  genres: state.entities.genres,
})

const mapDispatchToProps = dispatch => ({
  fetchMoviesByGenre: (genreId) => dispatch(fetchMoviesByGenre(genreId)),
  fetchGenreList: () => dispatch(fetchGenreList())
})

const MovieIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieIndex)

export default MovieIndexContainer