import { connect } from 'react-redux'
import { fetchFeaturedMovies, fetchMovie } from '../../actions/movie_actions'
import FeaturedMovies from './featured_movies'

const mapStateToProps = state => ({
  movies: state.entities.movies,
  currentUser: state.session
})

const mapDispatchToProps = dispatch => ({
  fetchFeaturedMovies: () => dispatch(fetchFeaturedMovies()),
  fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
})

const FeaturedMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedMovies)

export default FeaturedMoviesContainer;