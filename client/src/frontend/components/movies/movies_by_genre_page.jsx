import React, { useEffect, useState, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import MovieIcon from './movie_icon'
import '../../../stylesheets/by-genre.scss'

const MoviesByGenrePage = ({movies, fetchMoviesByGenre, genre, match: {params}}, props) => {
  const [page, setPage] = useState(1)
  
  const [isSending, setIsSending] = useState(false)
  const sendRequest = useCallback(async (newPage) => {
    // don't send again while we are sending
  if (isSending) return
  // update state
  setIsSending(true)
  // send the actual request
  await fetchMoviesByGenre(params.genreId, newPage)
  
  // once the request is sent, update state again
  setIsSending(false)
  }, [isSending]) // update the callback if the state changes
  
  useEffect(() => {
    fetchMoviesByGenre(params.genreId, page)
  }, [])
  
  return <div className='movie-list'>
    <h2>Search Results: </h2>
    {
      movies[params.genreId].map(movie => <MovieIcon movie={movie} clickable={true}/>)
    }
    <button 
      disabled={isSending} 
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        let nextPage = page + 1
        setPage(nextPage)
        sendRequest(nextPage)
        }
      }>
      More Movies
    </button>
  </div>
}

export default withRouter(MoviesByGenrePage)