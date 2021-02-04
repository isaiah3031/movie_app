import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/movie_actions'
import ContinueWatching from './continue_watching'

const mapStateToProps = state => ({
  currentUser: state.session,
  continueWatching: state.entities.movies
})

const mapDispatchToProps = dispatch => ({
  fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
})

const ContinueWatchingContiainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContinueWatching)

export default ContinueWatchingContiainer