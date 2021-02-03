import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import MovieIndexContainer from './movies/movie_index_container'
import MovieDetailContainer from './movies/movie_detail_container'
import FeaturedMoviesContainer from './movies/featured_movies_container'
console.log(process.env.REACT_APP_GOOGLE_API_KEY)
const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/login' component={LoginFormContainer} />
      <Route exact path='/' component={FeaturedMoviesContainer} />
      <Switch>
        <Route path='/movie/:movie_id' component={MovieDetailContainer} />
        <Route path='/' component={MovieIndexContainer} />
      </Switch>

    </div>
  )
}

export default App