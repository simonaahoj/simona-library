import { MenuState, TOGGLE_MENU, ToggleMenuAction } from '../../types'

export default function menuState(
  oldState: MenuState = {
    open: false,
  },
  action: ToggleMenuAction
): MenuState {
  switch (action.type) {
  case TOGGLE_MENU: {
    const newState = {
      ...oldState,
    }
    newState.open = !oldState.open
    return newState
  }
  default:
    return oldState
  }
}
