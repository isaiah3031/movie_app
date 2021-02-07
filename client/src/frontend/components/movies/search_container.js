import { connect } from 'react-redux'
import { fetchSearchResults } from '../../actions/movie_actions'
import Search from './search'

const mapStateToProps = state => ({
  searchResults: state.entities.movies.searchResults
})

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: searchTerm => dispatch(fetchSearchResults(searchTerm))
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer