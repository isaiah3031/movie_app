import React from 'react'

const FeaturedMovie = ({movie}) => {
  return <>
    <h1>{movie.title}</h1>
    <iframe 
      src={`https://www.youtube.com/embed/${movie.video_key}?rel=0&amp;autoplay=1&mute=1&controls=0`}>
    </iframe>
    <p>{movie.overview}</p>
  </>
}

export default FeaturedMovie