import React, { useEffect } from 'react'
import '../../../stylesheets/detail_view.scss'
import $ from 'jquery'
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
  
  let timedelay = 1;
  const delayCheck = () => {
    if (timedelay == 6) { 
      $('.description').fadeOut();
      timedelay = 1;
    }
    timedelay += 1;
  }

  $(document).mousemove(function() {
    $('.description').fadeIn();
    timedelay = 1;
    clearInterval(_delay);
    _delay = setInterval(delayCheck, 500);
  })
  let _delay = setInterval(delayCheck, 500)


  try {
    return (
      <div className='detail-view'>
        <div className='description'>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <form>
            <button onClick={() => handlePlay(movie.id)}>Play</button>
          </form>
        </div>
        <iframe src={`https://www.youtube.com/embed/${movie.video_key}?rel=0&amp;autoplay=1&mute=1&controls=0`}></iframe>
      </div>
    )
  } catch (error) {
    return null
  }
}

export default withRouter(MovieDetail);