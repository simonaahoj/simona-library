import { SearchActions, SEARCH, CHANGE_SEARCH, SearchState } from '../../types'

export default function searchState(
  state: SearchState = {
    filter: '',
  },
  action: SearchActions
): SearchState {
  switch (action.type) {
  case SEARCH: {
    console.log(action)
    return {
      ...state,
      filter: action.payload,
    }
  }
  case CHANGE_SEARCH: {
    console.log('its change search')
    return {
      ...state,
      filter: action.payload,
    }
  }
  default:
    return state
  }
}
