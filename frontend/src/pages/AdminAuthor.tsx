import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import { createAuthor } from '../redux/actions'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      width: 800,
      height: 400,
      margin: 34,
    },
  })
)

export default function FormPropsTextFields() {
  const classes = useStyles()
  const dispatch = useDispatch()

  function handleCreateAuthorButton() {
    alert('Author si created')
    window.location.href = '/'
    let city = (document.getElementById('city') as HTMLInputElement).value
    let country = (document.getElementById('country') as HTMLInputElement).value
    let birthDate = (document.getElementById('birthDate') as HTMLInputElement)
      .value
    let firstName = (document.getElementById('firstName') as HTMLInputElement)
      .value
    let lastName = (document.getElementById('lastName') as HTMLInputElement)
      .value
    let imgUrl = (document.getElementById('imgUrl') as HTMLInputElement).value
    let biography = (document.getElementById('biography') as HTMLInputElement)
      .value
    let died = (document.getElementById(
      'died'
    ) as HTMLInputElement).value.toString()

    dispatch(
      createAuthor({
        _id: undefined,
        city: city,
        country: country,
        firstName: `${firstName}`,
        birthDate: `${birthDate}`,
        lastName: lastName,
        imgUrl: `${imgUrl}`,
        biography: `${biography}`,
        died: `${died}`,
      })
    )
  }
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Creat or Update Author
          </Typography>
          <div>
            <TextField id="firstName" label="First Name" />
            <TextField id="lastName" label="Last Name" />
            <TextField id="birthDate" label="Birth Date" />
            <TextField id="died" label="Death Date" />
            <TextField id="city" label="City" />
            <TextField id="country" label="Country" />
            <TextField id="biography" label="Biography" />
            <TextField id="imgUrl" label="Image Url" />
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleCreateAuthorButton}>
            Create
          </Button>
          <a href={`/`}>
            {' '}
            <Button size="small"> Back </Button>
          </a>
        </CardActions>
      </Card>
    </>
  )
}
