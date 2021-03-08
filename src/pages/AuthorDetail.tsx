import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { fetchAuthors, fetchBooks } from '../redux/actions'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={author?.imgUrl}
            title={book.title}
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {author?.firstName} {author?.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              City: {author?.city}
              <br />
              Country: {author?.country}
              <br />
              Birth Date: {author?.birthDate}
              <br />
              Death Date:{author?.died}
              <br />
              Biography: {author?.biography}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href={`/`}> Back </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
