import React from 'react'

import Books from '../components/Books'
import SearchAppBar from '../components/SearchAppBar'

import './Library.css'

export default function Library() {
  return (
    <>
      <SearchAppBar />
      <Books />
    </>
  )
}
