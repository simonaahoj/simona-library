import {
  FETCH_AUTHORS,
  FetchAuthorsAction,
  ADD_AUTHORS,
  AddAuthorsAction,
  Author,
} from '../../types'

export function fetchAuthors(): FetchAuthorsAction {
  return { type: FETCH_AUTHORS }
}

export function addAuthors(authors: Author[]): AddAuthorsAction {
  return {
    type: ADD_AUTHORS,
    payload: { authors: authors },
  }
}
