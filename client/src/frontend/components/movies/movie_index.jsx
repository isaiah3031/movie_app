import React, {useEffect} from 'react'
import {withRouter} from 'react-router'
import HorizontalMoviesByGenreContainer from './horizontal_movies_by_genre_container'
import FeaturedMoviesContainer from './featured_movies_container'
function MovieIndex(props) {
  useEffect(() => {
    props.fetchGenreList()
  }, [])

  return (
    <>
      <FeaturedMoviesContainer />
      <div>
        {Object.values(props.genres).map((genre) =>
          <section>
            <label>{genre.name}</label>
            <HorizontalMoviesByGenreContainer genre={genre}/>
          </section>
        )}   
      </div>
    </>
  )
}

export default withRouter(MovieIndex)