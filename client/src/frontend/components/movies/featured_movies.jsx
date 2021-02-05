import React from 'react'
import '../../../stylesheets/featured_movies.scss'
import ContinueWatchingContainer from './continue_watching_container'
import MovieIcon from './movie_icon'

// Renders the ContinueWatching component and four featured movies that are hardcoded into the state
// at selections. This was done to avoid having to hit the database separately for each trailer. 

class FeaturedMovies extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: 464052,
      selections: [464052, 775996, 508442, 560144]
    }
  }

  // Loops through watch history and selections arrays and fetch movies for each movie Id.
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

  toggleSelectedMovie(movieIndex) {
    this.setState({ selectedMovie: movieIndex} )
  }

  isSelectedMovie(movieIndex) {
    return this.state.selectedMovie === movieIndex
  }

  // Returns an array of the current user's watch history
  continueWatching() {
    let continueWatching = []
    if (this.props.currentUser.watch_history) {
      this.props.currentUser.watch_history.map(movieId => {
        continueWatching.push(this.props.movies[movieId])
      })
    }
    return continueWatching
  }

  render() {
    let continueWatching = this.continueWatching()
    return (
      <>
        {/* Renders the Featured movie component with one movie selected by default. */}
        <section className='featured_content'>
          {this.state.selections.map((movieIndex) => {
            let movie = this.props.movies[movieIndex]
            return (
              <div id={movieIndex} 
                className={ this.isSelectedMovie(movieIndex) ? 'large_featured' : 'small_featured' }
                onClick={() => this.toggleSelectedMovie(movieIndex)}>
                <h1>{movie.title}</h1>
                {/* The selected movie is returned as its trailer and all other featured movies are rendered as normal movie icons */}
                {
                  this.isSelectedMovie(movieIndex) ? 
                  <iframe 
                    src={`https://www.youtube.com/embed/${movie.video_key}?rel=0&amp;autoplay=1&mute=1&controls=0`}>
                  </iframe> :
                  <MovieIcon movie={movie}/>
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