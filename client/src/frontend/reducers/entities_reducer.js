import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import MovieReducer from './movie_reducer'
import GenreReducer from './genre_reducer'

const entitiesReducer = combineReducers({
  users: UsersReducer,
  movies: MovieReducer,
  genres: GenreReducer
})

export default entitiesReducer;