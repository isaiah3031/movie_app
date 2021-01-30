import React from 'react'
import '../../../stylesheets/carousels.scss'
function MovieIcon(props) {
  return (
    <>
      <label>{props.movie.title}</label>
      <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}/>
    </>
  )
}

export default MovieIcon;