import React from 'react'
import { withRouter } from 'react-router'
import '../../../stylesheets/small_icons.scss'
import MovieDetailContainer from './movie_detail_container'
// Should I render the detail view here or somewhere else?

const MovieIcon = (props) => {
  const {history, movie: { title, poster_path, id }} = props
  const viewDetails = () => {
    history.push(`/movie/${id}`)
  }

  return (
    <>
      <div onClick={() => {
        viewDetails(props)
        }
      } className='small_icons' id={id}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
      </div>
    </>
  )
}

export default withRouter(MovieIcon);