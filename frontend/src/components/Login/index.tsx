import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { logInUser, signInUser, signUpUser } from '../../redux/actions'

export default function Login() {
  const dispatch = useDispatch()
  const responseGoogle = (response: any) => {
    dispatch(logInUser(response.tokenObj.id_token))
  }

  function handlerSingIn() {
    let email = (document.getElementById('email-signIn') as HTMLInputElement)
      .value
    let password = (document.getElementById(
      'password-signIn'
    ) as HTMLInputElement).value

    dispatch(
      signInUser({
        _id: undefined,
        firstName: undefined,
        birthDate: undefined,
        lastName: undefined,
        email: `${email}`,
        joinDate: undefined,
        imgUrl: undefined,
        password: `${password}`,
        admin: false,
      })
    )
  }

  function handlerSingUp() {
    alert('User si created')
    window.location.href = '/'
    let firstName = (document.getElementById('firstName') as HTMLInputElement)
      .value
    let lastName = (document.getElementById('lastName') as HTMLInputElement)
      .value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let password = (document.getElementById('password') as HTMLInputElement)
      .value

    dispatch(
      signUpUser({
        _id: undefined,
        firstName: `${firstName}`,
        birthDate: undefined,
        lastName: lastName,
        email: `${email}`,
        joinDate: undefined,
        imgUrl: undefined,
        password: `${password}`,
        admin: false,
      })
    )
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))

  const classes = useStyles()

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LibraryBooksIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email-signIn"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password-signIn"
                autoComplete="current-password"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handlerSingIn}
            >
              Sign In
            </Button>
            <GoogleLogin
              clientId="1406506085-jt9ps69hd8eh4tigkjasjj1f1vaqdj2d.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </form>
        </div>
      </Container>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LibraryBooksIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handlerSingUp}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </>
  )
}
