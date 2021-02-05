import { connect } from 'react-redux'
import HorizontalList from './horizontal_list'
import { fetchMoviesByGenre } from '../../actions/movie_actions'

const mapStateToProps = (state, ownProps) => ({
  type: 'genre',
  movies: state.entities.movies,
  genre: ownProps.genre
})

const mapDispatchToProps = dispatch => ({
  fetchMoviesByGenre: (genreId) => dispatch(fetchMoviesByGenre(genreId))
})

const MoviesByGenreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalList)

export default MoviesByGenreContainer