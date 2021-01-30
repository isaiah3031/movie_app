import { connect } from 'react-redux'
import MoviesByGenre from './movies_by_genre'
import { fetchMoviesByGenre } from '../../actions/movie_actions'

const mapStateToProps = (state, ownProps) => ({
  movies: state.entities.movies,
  genre: ownProps.genre
})

const mapDispatchToProps = dispatch => ({
  fetchMoviesByGenre: (genreId) => dispatch(fetchMoviesByGenre(genreId))
})

const MoviesByGenreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesByGenre)

export default MoviesByGenreContainer