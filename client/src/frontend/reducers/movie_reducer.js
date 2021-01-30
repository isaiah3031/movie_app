import * as types from '../constants/action_types'

const MovieReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_MOVIES):
      return {...action.movies}
    default:
      return state;
  }
}

export default MovieReducer