import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import MovieIndexContainer from './movies/movie_index_container'
import MovieDetailContainer from './movies/movie_detail_container'
import MoviesByGenreContainer from './movies/movies_by_genre_container'
import SearchContainer from './movies/search_container'

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
        <SearchContainer />
      </header>
      <Switch>
        <Route path='/signup' component={SignupFormContainer} />
        <Route path='/login' component={LoginFormContainer} />
        <Route exact path='/genre/:genreId' component={MoviesByGenreContainer} />
      <Switch>
        <Route path='/movie/:movie_id' component={MovieDetailContainer} />
        <Route path='/' component={MovieIndexContainer} />
      </Switch>
    </Switch>
    </div>
  )
}

export default App