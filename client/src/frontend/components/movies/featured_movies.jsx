import React from 'react'
import '../../../stylesheets/featured_movies.scss'
import ContinueWatching from './continue_watching'
 
class FeaturedMovies extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: '',
      selections: this.randomIndices()
    }
  }

  componentWillMount() {
    if (this.props.currentUser.watch_history) {
      this.props.currentUser.watch_history.forEach((movieId) => {
        this.props.fetchMovie(movieId)
      })
    }

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
    const continueWatching = []
    if (this.props.currentUser.watch_history) {
      this.props.currentUser.watch_history.map(movieId => {
        continueWatching.push(this.props.movies[movieId])
      })
    }
    
    
    return (
      <>
        <section className='featured_content'>
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
        {!!this.props.currentUser ? 
          <ContinueWatching 
            continueWatching={continueWatching} 
            currentUser={this.props.currentUser}/> : 
          null
        }
      </>
    )
  }
}

export default FeaturedMovies;