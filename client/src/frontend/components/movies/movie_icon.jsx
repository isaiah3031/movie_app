import React from 'react'
import { withRouter } from 'react-router'
import '../../../stylesheets/small_icons.scss'
import MovieDetailContainer from './movie_detail_container'
// Should I render the detail view here or somewhere else?

const MovieIcon = ({clickable, history, movie: {poster_path, id}}) => {
  const viewDetails = () => {
    history.push(`/movie/${id}`)
  }
  try {
    return (
      <>
        <div onClick={() => {
          if (clickable) viewDetails()
          }
        } className='small_icons' id={id}>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
        </div>
      </>
    )
  } catch (error) {
    return null
  }

}

export default withRouter(MovieIcon);