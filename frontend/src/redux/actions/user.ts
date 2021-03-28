import {
  FETCH_LOGGED_IN_USER,
  FetchLoggedInUserAction,
  ADD_LOGGED_IN_USER,
  AddLoggeedInUsersAction,
  User,
  LOG_IN_USER,
  LogInUserAction,
  SIGN_UP_USER,
  SingUpAction,
  SIGN_IN_USER,
  SingInAction,
  UserSingIn,
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
export function logInUser(id_token: string): LogInUserAction {
  return {
    type: LOG_IN_USER,
    payload: { id_token: id_token },
  }
}

export function signUpUser(user: User): SingUpAction {
  return {
    type: SIGN_UP_USER,
    payload: { user: user },
  }
}

export function signInUser(userSingIn: UserSingIn): SingInAction {
  return {
    type: SIGN_IN_USER,
    payload: { userSingIn: userSingIn },
  }
}
