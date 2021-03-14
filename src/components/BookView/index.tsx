import React from 'react'
import { AppState, Book } from '../../types'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import AuthorView from '../AuthorView'
import {
  addBooktoBaket,
  deleteBook,
  fetchUser,
  removeBookfromBasket,
} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
      marginBottom: 20,
      marginTop: 20,
    },
    image: {
      width: 150,
      height: 150,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  })
)

export default function BookView({
  _id,
  title,
  published,
  categories,
  pages,
  imgUrl,
  idAuthor,
  ISBN,
  description,
  copy,
}: Book) {
  const classes = useStyles()

  const dispatch = useDispatch()
  const basketState = useSelector((state: AppState) => state.basketState) || {
    books: [],
  }
  const loggedInUser = useSelector((state: AppState) => state.loggedInUser.user)
  if (loggedInUser === undefined) {
    dispatch(fetchUser())
  }

  function handleCreateAuthorButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    window.location.href = '/admin/author'
  }

  function hadndleRemoveButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    dispatch(
      removeBookfromBasket({
        _id,
        title,
        published,
        categories,
        pages,
        imgUrl,
        idAuthor,
        ISBN,
        description,
        copy,
      })
    )
  }

  function handleCreateButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    window.location.href = '/admin/book'
  }

  function hadndleDeleteButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    dispatch(
      deleteBook({
        _id,
        title,
        published,
        categories,
        pages,
        imgUrl,
        idAuthor,
        ISBN,
        description,
        copy,
      })
    )
  }

  function handleBorrow(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(
      addBooktoBaket({
        _id,
        title,
        published,
        categories,
        pages,
        imgUrl,
        idAuthor,
        ISBN,
        description,
        copy,
      })
    )
  }

  const isInBasket =
    basketState.books //all books
      .map((b) => b?.title) //all titles
      .indexOf(title) >= 0

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <a href={`/book/${_id}`}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={`${title}`} src={imgUrl} />
              </ButtonBase>
            </a>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <a href={`/book/${_id}`}> {title}</a>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <a href={`/author/${_id}`}>
                    {' '}
                    <AuthorView idAuthor={idAuthor} />
                  </a>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ISBN:{ISBN} <br />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <button
                    type="button"
                    onClick={handleBorrow}
                    disabled={isInBasket}
                  >
                    Add to basket
                  </button>
                  {loggedInUser?.firstName && (
                    <>
                      <button type="button" onClick={hadndleDeleteButton}>
                        Delete{' '}
                      </button>
                      <button type="button" onClick={handleCreateButton}>
                        Create{' '}
                      </button>
                      <button type="button" onClick={handleCreateAuthorButton}>
                        Create Author{' '}
                      </button>
                    </>
                  )}
                  <button type="button" onClick={hadndleRemoveButton}>
                    Return{' '}
                  </button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              {!isInBasket && (
                <Typography variant="subtitle1">Available</Typography>
              )}
              {isInBasket && (
                <Typography variant="subtitle1">BORROWED</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
