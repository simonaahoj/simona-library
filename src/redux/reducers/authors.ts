import {
  AuthorsState,
  AuthorAction,
  FETCH_AUTHORS,
  ADD_AUTHORS,
} from '../../types'

export default function authors(
  state: AuthorsState = {
    authors: [],
  },
  action: AuthorAction
): AuthorsState {
  switch (action.type) {
  case FETCH_AUTHORS: {
    console.log('FETCH Authors ACTION TRIGGERED')
    return state
  }
  case ADD_AUTHORS: {
    console.log('got the authors')
    console.log(action.payload)
    return {
      ...state,
      authors: action.payload.authors,
    }
  }

  default:
    return state
  }
}
