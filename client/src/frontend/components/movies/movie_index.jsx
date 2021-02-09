import React, {useEffect} from 'react'
import {withRouter} from 'react-router'
import HorizontalMoviesByGenreContainer from './horizontal_movies_by_genre_container'
import FeaturedMoviesContainer from './featured_movies_container'
import '../../../stylesheets/carousels.scss'

function MovieIndex(props) {
  useEffect(() => {
    props.fetchGenreList()
  }, [])

  return (
    <>
      <FeaturedMoviesContainer />
      <div>
        {Object.values(props.genres).map((genre) =>
          <section className='carousels'>
            <HorizontalMoviesByGenreContainer genre={genre}/>
          </section>
        )}   
      </div>
    </>
  )
}

export default withRouter(MovieIndex)