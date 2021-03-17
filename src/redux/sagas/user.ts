import { put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_LOGGED_IN_USER,
  FetchLoggedInUserAction,
  LogInUserAction,
  LOG_IN_USER,
  User,
} from '../../types'
import { addUser } from '../actions'

async function fetchLoggedInUser() {
  const result = await fetch('http://localhost:5000/api/v1/loggedInUser', {
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

  fetch('http://localhost:5000/google/login', {
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

export default [
  takeLatest(FETCH_LOGGED_IN_USER, fetchLoggedInUserHandler),
  takeLatest(LOG_IN_USER, loginUserHandler),
]
