import * as types from '../constants/action_types'

const MovieReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_MOVIES):
      return Object.assign({}, state, action.movies)
    case (types.RECEIVE_MOVIE):
      return {[action.movie.id]: action.movie}
    default:
      return state;
  }
}

export default MovieReducer