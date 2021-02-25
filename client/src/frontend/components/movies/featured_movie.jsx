import React from 'react'
import $ from 'jquery'

const FeaturedMovie = ({movie}) => {
  let timedelay = 1;
  const delayCheck = () => {
    if (timedelay == 6) { 
      $('p').fadeOut();
      timedelay = 1;
    }
    timedelay += 1;
  }

  $(document).mousemove(function() {
    $('p').fadeIn();
    timedelay = 1;
    clearInterval(_delay);
    _delay = setInterval(delayCheck, 500);
  })
  let _delay = setInterval(delayCheck, 500)

  return <>
    <h1>Featured Movies</h1>
    <iframe 
      src={`https://www.youtube.com/embed/${movie.video_key}?rel=0&amp;autoplay=1&mute=1&controls=0`}>
    </iframe>
    <p>{movie.overview}</p>
  </>
}

export default FeaturedMovie