import * as types from '../constants/action_types'

const UsersReducer = (state = {}, action) => {
  switch(action.type) {
    case types.RECEIVE_CURRENT_USER:
      return action.user
    case types.LOGOUT_CURRENT_USER:
      return {}
    default: 
      return state
  }
}

export default UsersReducer