import { SEARCH, SearchAction } from '../../types'

export function setSearch(text: string): SearchAction {
  return { type: SEARCH, payload: text }
}
