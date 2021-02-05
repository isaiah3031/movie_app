import React from 'react'
import '../../../stylesheets/featured_movies.scss'
import ContinueWatchingContainer from './continue_watching_container'

// Renders the ContinueWatching component and four featured movies that are hardcoded into the state
// at selections. This was done to avoid having to hit the database separately for each trailer.
class FeaturedMovies extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: '',
      selections: [464052, 775996, 508442, 560144]
    }
  }

  componentWillMount() {
    const {currentUser: {watch_history}} = this.props
    if (watch_history) {
      watch_history.forEach((movieId) => {
        this.props.fetchMovie(movieId)
      })
    }
    this.state.selections.forEach((movieId) => {
      this.props.fetchMovie(movieId)
    })
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
            
            let movie = this.props.movies[movieIndex]
            if (!movie.title) debugger
            return (
              <div id={movieIndex} 
                className={this.state.selectedMovie === movieIndex ? 'large_featured' : 'small_featured'}
                onClick={() => this.toggleSelectedMovie(movieIndex)}>
                <h1>{movie.title}</h1>
                {this.state.selectedMovie === movieIndex ? 
                <iframe width='320' height='240' frameborder='0'
                  src={`https://www.youtube.com/embed/${movie.video_key}?rel=0&amp;autoplay=1&mute=1&controls=0`}>
                </iframe> :
                <img name={movieIndex} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                }
                <p>{movie.overview}</p>
              </div>
            )
          })}
        </section>
        {continueWatching === [] ? null : <ContinueWatchingContainer continueWatching={continueWatching}/>}
      </>
    )
  }
}

export default FeaturedMovies;