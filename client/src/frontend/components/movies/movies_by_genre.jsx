import React, {useEffect} from 'react'
import MovieIcon from './movie_icon'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

function MoviesByGenre(props) {
  useEffect(() => {
    props.fetchMoviesByGenre(props.genre.id)
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 4
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

  try {
    return ( 
      <Carousel 
        infinite={true}
        responsive={responsive}>        
        {
          props.movies[props.genre.id].map((movie, index) => {
          return <MovieIcon id={index} movie={movie} />
        }
      )}
    </Carousel>
  )
  } catch (error) {
    return null      
  }
}

export default MoviesByGenre