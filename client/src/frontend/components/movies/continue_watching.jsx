import React, {useEffect} from 'react'
import MovieIcon from './movie_icon'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
// Was going to loop through the user's continue watching and hit the movie database
// each time. I don't like this thought because it seems wasteful having already 
// loaded each movie. Maybe instead of saving watch history as an array of 
// movieIds I should include its genre code. This would allow me to use the movies
// already loaded in the state if they are there already.

function ContinueWatching(props) {
  // useEffect(() => {
  //   props.currentUser.watch_history.forEach((movieId) => {
  //     props.fetchMovie(movieId)
  //   })
  // })

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
        <>
        <h1>ContinueWatching</h1>
        <Carousel 
          infinite={true}
          responsive={responsive}>        
          {
            props.continueWatching.map((movie, index) => {
              if (!movie) return null
              return <MovieIcon id={index} movie={movie} />
          }
        )}
      </Carousel>
      </>
    )
    } catch (error) {
      return null      
    }
}

export default ContinueWatching