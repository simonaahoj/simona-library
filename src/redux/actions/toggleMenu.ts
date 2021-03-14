import { TOGGLE_MENU, ToggleMenuAction } from '../../types'

export function toggleMenu(): ToggleMenuAction {
  console.log('toggle action')
  return { type: TOGGLE_MENU, payload: {} }
}
