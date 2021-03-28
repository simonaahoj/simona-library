import React from 'react'

export default function LogoutPage() {
  //delete the token
  localStorage.removeItem('token')
  //redirect user to login
  window.location.href = '/login'

  return <></>
}
