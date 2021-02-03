import React, { useEffect } from 'react'
import '../../../stylesheets/detail_view.scss'
import {withRouter} from 'react-router'

function MovieDetail(props) {
  let movieId = props.history.location.pathname.slice(7)

  useEffect(() => {
    props.fetchMovie(movieId)
  }, [])
  const movie = props.movies[movieId]

  const handlePlay = (movieId) => {
    props.editUserProfile({watchHistory: movieId}, props.currentUserId);
  }

  try {
    return (
      <div className='detail-view'>
        <h1>{movie.title}</h1>
        <p>
          {movie.overview}
        </p>
        <form>
          <button onClick={() => handlePlay(movie.id)}>Play</button>
        </form>
      </div>
    )
  } catch (error) {
    return null
  }
}

export default withRouter(MovieDetail);