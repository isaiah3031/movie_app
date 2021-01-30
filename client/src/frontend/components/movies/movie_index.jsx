import React from 'react'
import MoviesByGenreContainer from './movies_by_genre_container'

class MovieIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      genres: {}
    })
  }

  componentWillMount() {
    this.props.fetchGenreList()
  }

  render() {
    return (
      <div>
        {Object.values(this.props.genres).map((genre) =>
          <section>
            <label>{genre.name}</label>
            <MoviesByGenreContainer genre={genre}/>
          </section>
        )}   
      </div>
    )
  }
}

export default MovieIndex