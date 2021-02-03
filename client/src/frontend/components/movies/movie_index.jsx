import React, {useEffect} from 'react'
import {withRouter} from 'react-router'
import MoviesByGenreContainer from './movies_by_genre_container'

function MovieIndex(props) {
  useEffect(() => {
    props.fetchGenreList()
  }, [])

  return (
    <>
      <div>
        {Object.values(props.genres).map((genre) =>
          <section>
            <label>{genre.name}</label>
            <MoviesByGenreContainer genre={genre}/>
          </section>
        )}   
      </div>
    </>
  )
}

export default withRouter(MovieIndex)