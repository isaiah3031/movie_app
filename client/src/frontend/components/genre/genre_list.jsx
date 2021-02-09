import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../../stylesheets/side-menu.scss'

const GenreList = ({genreList, history}) => {
  return (
      <ul className='side-menu'>
      <h2>Genres</h2>
      {Object.values(genreList).map((genre) => 
        <h3 onClick={() => history.push(`/genre/${genre.id}`)} 
          key={genre.id}>
          {genre.name}
        </h3>
      )}
    </ul>
  )
}

export default withRouter(GenreList);