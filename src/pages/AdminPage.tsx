import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  })
)
export default function AdminPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        <TextField
          label="Dense"
          id="margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
        />
        <TextField
          label="Normal"
          id="margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
      </div>
    </div>
  )
}
