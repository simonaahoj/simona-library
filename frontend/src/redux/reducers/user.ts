import {
  LoggedInUserState,
  UserAction,
  FETCH_LOGGED_IN_USER,
  ADD_LOGGED_IN_USER,
} from '../../types'

export default function loggedInUser(
  state: LoggedInUserState = {
    user: undefined,
  },
  action: UserAction
): LoggedInUserState {
  switch (action.type) {
  case FETCH_LOGGED_IN_USER: {
    console.log('FETCH loggged in user ACTION TRIGGERED')
    return state
  }
  case ADD_LOGGED_IN_USER: {
    console.log('got the user')
    console.log(action.payload)
    return {
      ...state,
      user: action.payload.user,
    }
  }

  default:
    return state
  }
}
