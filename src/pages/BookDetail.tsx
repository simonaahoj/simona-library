import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { addBooktoBaket, fetchAuthors, fetchBooks } from '../redux/actions'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { title } from 'process'

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginLeft: 500,
  },
  media: {
    height: 380,
    backgroundSize: 'contain',
  },
})

export default function BookDetail() {
  const classes = useStyles()
  const { id } = useParams()

  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()

  const booksState = useSelector((state: AppState) => state.books) || {}
  if (booksState.books?.length === 0) {
    dispatch(fetchBooks())
  }

  const book = useSelector((state: AppState) =>
    state.books.books.find((book) => book._id === id)
  )

  const authorsState = useSelector((state: AppState) => state.authors) || {}
  if (authorsState.authors?.length === 0) {
    dispatch(fetchAuthors())
  }

  const author = useSelector((state: AppState) =>
    state.authors.authors.find((author) => author._id === book?.idAuthor)
  )
  function handleUpdate(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {}

  function handleCancel(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setEdit(false)
  }

  function handleStartEditing(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setEdit(true)
  }

  function handleBorrow(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(
      addBooktoBaket({
        _id: undefined,
        title,
        published: `1987`,
        categories: [''],
        pages: `384`,
        imgUrl: '',
        idAuthor: '',
        ISBN: `986633737`,
        description: '',
        copy: `[]`,
      })
    )
  }

  if (!book) {
    return <div>Book not found</div>
  }

  let bookDetails = (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          {author?.firstName} {author?.lastName}
        </Typography>
        <CardMedia
          className={classes.media}
          image={book.imgUrl}
          title={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Description
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.description}
          </Typography>
          <br />
          <Typography gutterBottom variant="h6" component="h2">
            Details
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Published:{book.published}
            <br />
            Categories:{' '}
            {book.categories.map((category) => (
              <label>{category} </label>
            ))}
            <br />
            Pages:{book.pages}
            <br />
            ISBN:{book.ISBN}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={`/`}> Back </a>
        </Button>
        <Button size="small" color="primary" onClick={handleBorrow}>
          Borrow
        </Button>
        <button type="button" onClick={handleStartEditing}>
          Edit
        </button>
      </CardActions>
    </Card>
  )

  let updateBookDetails = (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          <input value={author?.firstName}></input>
          <input value={author?.lastName}></input>
        </Typography>
        <input value={book.imgUrl}></input>

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Description
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <textarea>{book.description}</textarea>
          </Typography>
          <br />
          <Typography gutterBottom variant="h6" component="h2">
            Details
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Published:<input></input>
            <br />
            Categories:{' '}
            {book.categories.map((category) => (
              <label>{category} </label>
            ))}
            <br />
            Pages:<input></input>
            <br />
            ISBN:<input></input>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={`/`}> Back </a>
        </Button>
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </CardActions>
    </Card>
  )

  if (edit) {
    return updateBookDetails
  }

  return <div>{bookDetails}</div>
}
