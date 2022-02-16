import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
  rootCarousel: {
    width: '13.125rem',
    height: '13.125rem',
    position: 'relative',
    margin: '0 auto',
    perspective: '62.5rem',
  },
  containerCarousel: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    transformStyle: 'preserve-3d',
    transition: 'transform 1s',
    transform: 'rotateX(-20deg) rotateY(0deg) rotateZ(0deg)',
    cursor: 'pointer',
  },
  containerItem: {
    transformStyle: 'preserve-3d',
    transition: 'all 420ms',
    '& > *': {
      position: 'absolute',
      top: '-60px',
      left: '-12px',
      marginTop: '-10px',
      height: '120px',
      width: '24px',
      opacity: '1',
      transition: 'all 420ms',
    }
  },
  item: {
    transform: (props: any) => `rotateY(${props * 15}deg) translateZ(${props}px)`,
  }
}));

export const Carousel = () => {
  const classes = useStyles({

  });

  return(<div className={classes.containerCarousel}>

    </div>
  )
}