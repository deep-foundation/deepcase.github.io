import { Box, makeStyles } from './framework';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    background: 'transparent', 
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