import * as types from '../constants/action_types'

const GenreReducer = (state = {}, action) => {
  switch (action.type) {
    case (types.RECEIVE_GENRES):
      return {...action.genres}
    default:
      return state;
  }
}

export default GenreReducer