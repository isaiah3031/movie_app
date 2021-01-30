import React from 'react'
import MovieIcon from './movie_icon'

class MoviesByGenre extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMoviesByGenre(this.props.genre.id)
  }
  
  render() {
    try {
      return <div>
        {
          this.props.movies[this.props.genre.id].map(movie => {
          return <MovieIcon movie={movie}/>
        }
        )}
      </div>
    } catch (error) {
      
    }
    return (
      null
    )
  }
}

export default MoviesByGenre