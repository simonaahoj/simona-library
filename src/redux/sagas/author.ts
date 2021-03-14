import { put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_AUTHORS,
  FetchAuthorsAction,
  CreateAuthorAction,
  CREATE_AUTHOR,
} from '../../types'
import { addAuthors } from '../actions'

async function fetchAuthors() {
  const result = await fetch(' http://localhost:5000/api/v1/authors')
  const authorsAsJson = await result.json()
  return authorsAsJson
}

function* fetchAllTheAuthors(action: FetchAuthorsAction) {
  console.log("I'm fetching all the authors")
  const authors = yield fetchAuthors()
  yield put(addAuthors(authors))
}

async function createAuthor(action: CreateAuthorAction) {
  let formData = new FormData()
  formData.append('firstName', action.payload.author.firstName)
  formData.append('lastName', action.payload.author.lastName)
  formData.append('city', action.payload.author.city)
  formData.append('imgUrl', action.payload.author.imgUrl)
  formData.append('country', action.payload.author.country)
  formData.append('birthDate', action.payload.author.birthDate.toString())
  formData.append('died', action.payload.author.died.toString())
  formData.append('biography', action.payload.author.biography)

  const result = await fetch('http://localhost:5000/api/v1/authors', {
    method: 'POST',
    body: new URLSearchParams([...(formData as any)]),
  })
  const bookAsJson = await result.json()
  return bookAsJson
}

export default [
  takeLatest(FETCH_AUTHORS, fetchAllTheAuthors),
  takeLatest(CREATE_AUTHOR, createAuthor),
]
