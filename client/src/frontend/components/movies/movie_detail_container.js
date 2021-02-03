import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/movie_actions'
import { editUserProfile } from '../../actions/session_actions'
import MovieDetail from './movie_detail'

const mapStateToProps = (state) => ({
  movies: state.entities.movies,
  currentUserId: state.session.id
}) 

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
  editUserProfile: (movieId, userId) => dispatch(editUserProfile(movieId, userId))
})

const MovieDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail)

export default MovieDetailContainer;