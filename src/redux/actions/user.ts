import {
  FETCH_LOGGED_IN_USER,
  FetchLoggedInUserAction,
  ADD_LOGGED_IN_USER,
  AddLoggeedInUsersAction,
  User,
} from '../../types'

export function fetchUser(): FetchLoggedInUserAction {
  return { type: FETCH_LOGGED_IN_USER }
}

export function addUser(user: User): AddLoggeedInUsersAction {
  return {
    type: ADD_LOGGED_IN_USER,
    payload: { user: user },
  }
}
