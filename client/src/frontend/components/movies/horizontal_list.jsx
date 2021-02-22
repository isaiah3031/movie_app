import React, {useEffect} from 'react'
import MovieIcon from './movie_icon'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import '../../../stylesheets/carousels.scss'

function HorizontalList(props) {
  useEffect(() => {
    if (props.type === 'genre') {
      props.fetchMoviesByGenre(props.genre.id)
    }
  }, [])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let movies = []
  switch (props.type) {
    case ('Continue Watching'):
      movies = props.continueWatching
    case ('genre'):
      if (props.genre) {
        movies = props.movies[props.genre.id]
      }
  }
  
  try {
    return ( 
    <>
      {props.header ? <h2 className='carousels'>{props.header}</h2> : null}
      <Carousel 
        className='carousels'
        infinite={true}
        responsive={responsive}>        
          {
            movies.map((movie, index) => {
            return <MovieIcon clickable={true} id={index} movie={movie} />
          }
        )}
      </Carousel>
    </>
  )
  } catch (error) {
    return null
  }
  
}

export default HorizontalList