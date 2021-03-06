import { put, takeLatest } from 'redux-saga/effects'

import { FETCH_LOGGED_IN_USER, FetchLoggedInUserAction } from '../../types'
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
  const loggedInUser = yield fetchLoggedInUser()
  yield put(addUser(loggedInUser))
}

export default [takeLatest(FETCH_LOGGED_IN_USER, fetchLoggedInUserHandler)]
