import React from 'react'
import MovieIcon from './movie_icon'
import '../../../stylesheets/horizontal_lists.scss'
import $ from 'jquery'

class MoviesByGenre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listStart = 0
    }
  }

  componentWillMount() {
    this.props.fetchMoviesByGenre(this.props.genre.id)
  }

  changeListStart(direction) {
    if (direction === 'left' && this.state.listStart != 0) {
      this.setState({
        listStart: this.state.listStart -= 5
      })
    } else if (direction === 'right' && this.state.listStart != 20) {
      this.setState({
        listStart: this.state.listStart += 5
      })
    } else {
      return 'no movement'
    }
  }
  
  autoScroll(direction) {
    this.changeListStart(direction)
    if (direction === 'left') {  
      $(`#${this.props.genre.id}`).scrollBy(0, 100)
    } else {
      $(`#${this.props.genre.id}`).anitmate({
        scrollTop: $('#2').offset().right
      }, 2000)
    }
  }

  render() {
    try {
      return ( 
          <div>
            <button onClick={(e) => this.autoScroll(e)}  id='left'>left</button>        
            <div className='horizontal-lists' id={this.props.genre.id}>
            {
              this.props.movies[this.props.genre.id].map((movie, index) => {
              return <MovieIcon id={index} movie={movie} />
            }
            )}
          </div>
          <button onClick={(e) => this.autoScroll(e.target.id)} id='right'>right</button>
        </div>
      )
    } catch (error) {
      
    }
    return (
      null
    )
  }
}

export default MoviesByGenre