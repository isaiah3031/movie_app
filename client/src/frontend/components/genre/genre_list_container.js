import { connect } from 'react-redux'
import GenreList from './genre_list'

const mapStateToProps = state => ({
  genreList: state.entities.genres
})

const GenreListContainer = connect(
  mapStateToProps,
  null
)(GenreList)

export default GenreListContainer;