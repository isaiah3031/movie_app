import { connect } from 'react-redux'
import MoviesByGenrePage from './movies_by_genre_page'
import { fetchMoviesByGenre } from '../../actions/movie_actions'

const mapStateToProps = (state) => ({
  movies: state.entities.movies
})

const mapDispatchToProps = dispatch => ({
  fetchMoviesByGenre: (genreId, page) => dispatch(fetchMoviesByGenre(genreId, page))
})

const MoviesByGenreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesByGenrePage)

export default MoviesByGenreContainer