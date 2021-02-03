import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/movie_actions'
import MovieDetail from './movie_detail'

const mapStateToProps = (state) => ({
  movies: state.entities.movies,
}) 

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
})

const MovieDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail)

export default MovieDetailContainer;