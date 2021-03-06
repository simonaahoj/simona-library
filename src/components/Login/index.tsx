import React from 'react'

import GoogleLogin from 'react-google-login'

export default function Login() {
  const responseGoogle = (response: any) => {
    let data = {
      id_token: response.tokenObj.id_token,
    }

    fetch('http://localhost:5000/google/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.text())
      .then((token) => {
        localStorage.setItem('token', token)
        window.location.href = '/'
      })
  }

  return (
    <GoogleLogin
      clientId="1406506085-jt9ps69hd8eh4tigkjasjj1f1vaqdj2d.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}
