import { connect } from 'react-redux'
import HorizontalList from './horizontal_list'
import { fetchMoviesByGenre } from '../../actions/movie_actions'

const mapStateToProps = (state, ownProps) => ({
  type: 'genre',
  movies: state.entities.movies,
  header: ownProps.genre.name
})

const mapDispatchToProps = dispatch => ({
  fetchMoviesByGenre: (genreId) => dispatch(fetchMoviesByGenre(genreId))
})

const HorizontalMoviesByGenreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalList)

export default HorizontalMoviesByGenreContainer