import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { fetchBooks } from '../redux/actions'

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

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={book.imgUrl}
            title={book.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {book.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {book.categories.map((category) => (
                <label>{category} </label>
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
