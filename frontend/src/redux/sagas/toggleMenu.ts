import { takeLatest } from 'redux-saga/effects'

import { TOGGLE_MENU, ToggleMenuAction } from '../../types'

function* doMenu(action: ToggleMenuAction) {
  yield console.log('saga') // put({type: SET_MENU, payload: action.payload})
}

export default [takeLatest(TOGGLE_MENU, doMenu)]
