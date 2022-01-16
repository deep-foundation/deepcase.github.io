import { Box, makeStyles } from './framework';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    background: 'transparent', 
    overflow: 'hidden',
    boxSizing: 'border-box',
    boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',
    borderRadius: '50%',
    width: ' calc(200px + 0.5vmax)',
    height: ' calc(200px + 0.5vmax)',
    display: 'flex',
    alignItems: 'self-start',
    margin: '0 auto',
  },
  img: {
    width: '100%',
  }
}))

export const CrewCard = ({
  src,
  alt,
}:{
  src: string;
  alt?: string;
}) => {
  const classes = useStyles();

  return (<Box className={classes.container}>
      <img src={src} alt={alt} className={classes.img} />
    </Box>
  )
}