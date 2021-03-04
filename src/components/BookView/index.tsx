import React from 'react'
import { Book } from '../../types'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import AuthorView from '../AuthorView'

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
}: Book) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <a href={`/book/${_id}`}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={` ${title}`} src={imgUrl} />
              </ButtonBase>
            </a>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <AuthorView idAuthor={idAuthor} />
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ISBN:{ISBN} <br />
                  {_id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Borrow
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Available</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}