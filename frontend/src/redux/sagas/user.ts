import { put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_LOGGED_IN_USER,
  FetchLoggedInUserAction,
  LogInUserAction,
  LOG_IN_USER,
  User,
  CreateSingUpAction,
  SIGN_UP_USER,
  SIGN_IN_USER,
  SingInAction,
} from '../../types'
import { addUser } from '../actions'
const { REACT_APP_BACKEND_URL } = process.env

async function fetchLoggedInUser() {
  const result = await fetch(`${REACT_APP_BACKEND_URL}/api/v1/loggedInUser`, {
    headers: new Headers({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  })
  const authorsAsJson = await result.json()
  return authorsAsJson
}

function* fetchLoggedInUserHandler(action: FetchLoggedInUserAction) {
  console.log("I'm fetching the logged in user")

  if (localStorage.getItem('token') == null) {
    return
  }

  const loggedInUser: User = yield fetchLoggedInUser()
  yield put(addUser(loggedInUser))
}

function* loginUserHandler(action: LogInUserAction) {
  let data = {
    id_token: action.payload.id_token,
  }

  fetch(`${REACT_APP_BACKEND_URL}/google/login`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((response) => response.text())
    .then((token) => {
      localStorage.setItem('token', token)
      window.location.href = '/'
    })

  yield
}
async function createSignUp(action: CreateSingUpAction) {
  let formData = new FormData()
  formData.append('firstName', action.payload.user.firstName)
  formData.append('lastName', action.payload.user.lastName)
  formData.append('email', action.payload.user.email)
  formData.append('password', action.payload.user.password)

  fetch(`${REACT_APP_BACKEND_URL}/api/v1/users`, {
    method: 'POST',
    body: new URLSearchParams([...(formData as any)]),
  })
    .then((response) => response.text())
    .then((token) => {
      localStorage.setItem('token', token)
      window.location.href = '/'
    })
  return
}

async function signIn(action: SingInAction) {
  let formData = new FormData()
  formData.append('email', action.payload.userSingIn.email)
  formData.append('password', action.payload.userSingIn.password)

  fetch(`${REACT_APP_BACKEND_URL}/api/v1/users/mySignIn`, {
    method: 'POST',
    body: new URLSearchParams([...(formData as any)]),
  })
    .then((response) => response.text())
    .then((token) => {
      localStorage.setItem('token', token)
      window.location.href = '/'
    })
  return
}

export default [
  takeLatest(FETCH_LOGGED_IN_USER, fetchLoggedInUserHandler),
  takeLatest(LOG_IN_USER, loginUserHandler),
  takeLatest(SIGN_UP_USER, createSignUp),
  takeLatest(SIGN_IN_USER, signIn),
]
