import React from 'react'
import '../../../stylesheets/small_icons.scss'

function MovieIcon(props) {
  const {id, movie: { title, poster_path }} = props
  return (
    <div className='small_icons' id={id}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
    </div>
  )
}

export default MovieIcon;