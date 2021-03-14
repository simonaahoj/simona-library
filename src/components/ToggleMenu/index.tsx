import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../redux/actions'

import MenuIcon from '@material-ui/icons/Menu'
import './ToggleMenu.css'
import { IconButton } from '@material-ui/core'
import { AppState } from '../../types'

export default function ToggleMenu() {
  const dispatch = useDispatch()
  const menuState = useSelector((state: AppState) => state.menuState)

  function myMenu(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log('my menu')
    dispatch(toggleMenu())
  }

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={myMenu}
      >
        <MenuIcon />
      </IconButton>

      <div className={menuState?.open ? 'menu open' : 'menu closed'}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={myMenu}
        >
          <MenuIcon />
        </IconButton>
        LIBRARY
      </div>
    </>
  )
}
