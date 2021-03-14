import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import { createBook } from '../redux/actions'
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

  function createBookHandle() {
    alert('Book is created')
    window.location.href = '/'
    let title = (document.getElementById('title') as HTMLInputElement).value
    let categories = (document.getElementById('categories') as HTMLInputElement)
      .value
    let published = (document.getElementById(
      'published'
    ) as HTMLInputElement).value.toString()
    let imgUrl = (document.getElementById('imgUrl') as HTMLInputElement).value
    let idAuthor = (document.getElementById('idAuthor') as HTMLInputElement)
      .value
    let ISBN = (document.getElementById('ISBN') as HTMLInputElement).value
    let description = (document.getElementById(
      'description'
    ) as HTMLInputElement).value
    let copy = document.getElementById('copy') as HTMLInputElement

    dispatch(
      createBook({
        _id: undefined,
        title: title,
        published: `${published}`,
        categories: categories.split(' '),
        pages: `876`,
        imgUrl: `${imgUrl}`,
        idAuthor: `${idAuthor}`,
        ISBN: `${ISBN}`,
        description: `${description}`,
        copy: `${copy}`,
      })
    )
  }
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Creat Book
          </Typography>
          <TextField id="title" label="Title book" />
          <div>
            <TextField required id="published" label="Published Year" />
            <TextField id="categories" label="Categories" />
            <TextField id="imgUrl" label="Image Url" />
            <TextField id="idAuthor" label="Id Author" />
            <TextField
              id="pages"
              label="Pages"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField id="ISBN" label="ISBN" />
            <TextField id="description" label="Description" />
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={createBookHandle}>
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
