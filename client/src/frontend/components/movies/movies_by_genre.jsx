import React from 'react'

class MoviesByGenre extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMoviesByGenre(this.props.genre.id)
  }
  
  render() {
    return (
      <div>
      {Object.values(this.props.movies).map(movie => {
        return <label>{movie.title}</label>
      }
        
        )}
      </div>
    )
  }
}

export default MoviesByGenre