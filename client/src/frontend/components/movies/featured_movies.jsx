import React from 'react'
import '../../../stylesheets/featured_movies.scss'

class FeaturedMovies extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: '',
      selections: this.randomIndices()
    }
  }

  componentWillMount() {
    this.props.fetchFeaturedMovies()
  }

  randomIndices() {
    let chosen = [0,0,0,0]
    chosen.forEach((val, index) => {
      let posRand = Math.floor(Math.random() * 20)
      while (chosen.includes(posRand)){
        posRand = Math.floor(Math.random() * 20)
      }
      chosen[index] = posRand
    })
    return chosen
  }

  toggleSelectedMovie(movieIndex) {
    this.setState({ selectedMovie: movieIndex} )
  }

  render() {
    return <section className='featured_content'>
      {this.state.selections.map((movieIndex, index) => {
        if (!this.props.movies.featured) return null
        let movie = this.props.movies.featured[movieIndex]
        return (
            <div id={movieIndex} 
              className={this.state.selectedMovie === movieIndex ? 'large_featured' : 'small_featured'}
              onClick={() => this.toggleSelectedMovie(movieIndex)}>
              <label>{movie.title}</label>
              <img name={movieIndex} src={this.state.selectedMovie === movieIndex ? 
              `https://image.tmdb.org/t/p/w500${movie.poster_path}` :
              `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              }/>
              <p>{movie.overview}</p>
            </div>
          

        )
      })}
    </section>
  }
}

export default FeaturedMovies;