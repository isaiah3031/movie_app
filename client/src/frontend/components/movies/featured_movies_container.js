import { connect } from 'react-redux'
import { fetchFeaturedMovies } from '../../actions/movie_actions'
import FeaturedMovies from './featured_movies'

const mapStateToProps = state => ({
  movies: state.entities.movies
})

const mapDispatchToProps = dispatch => ({
  fetchFeaturedMovies: () => dispatch(fetchFeaturedMovies())
})

const FeaturedMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedMovies)

export default FeaturedMoviesContainer;