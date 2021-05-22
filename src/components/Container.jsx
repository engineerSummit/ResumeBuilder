import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      fontStyle:'poppins',
    },
  },
}));

const Container = () => {
  const classes = useStyles();
    return (
        <div className="container-R">
          <div class="page">

            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Full Name" />
            </form>
            <div class="template-L">

            </div>
            <div class="template-R">

            </div>
          </div>
        </div>
    )
}

export default Container;
