import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/movie_actions'
import HorizontalList from './horizontal_list'

const mapStateToProps = (state, ownProps) => ({
  type: 'Continue Watching',
  currentUser: state.session,
  continueWatching: ownProps.continueWatching
})

const mapDispatchToProps = dispatch => ({
  fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
})

const ContinueWatchingContiainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalList)

export default ContinueWatchingContiainer