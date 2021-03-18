import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderColor: '#41B6E6',
      color: '#41B6E6',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#41B6E6',
        color: '#fff',
      },
    },
  })
);

const Answer = (props: any) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
