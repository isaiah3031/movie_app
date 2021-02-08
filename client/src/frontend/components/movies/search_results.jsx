import React from 'react'
import MovieIcon from './movie_icon'
import '../../../stylesheets/search_results.scss'

const SearchResults = ({results}) => {
  try {
    return (
      <div id='search-results'>
        {results.map(movie => <MovieIcon movie={movie} clickable={true} />)}
      </div>
    )
  } catch (error) {
   return null 
  }
}

export default SearchResults