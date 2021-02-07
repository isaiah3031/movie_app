import React from 'react'
import MovieIcon from './movie_icon'

const SearchResults = ({results}) => {
  try {
    return (
      <div>
        {results.map(movie => <MovieIcon movie={movie} clickable={true} />)}
      </div>
    )
  } catch (error) {
   return null 
  }
}

export default SearchResults