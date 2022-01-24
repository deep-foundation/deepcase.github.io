import { Box, makeStyles, Typography, GravityCard } from './framework';
import React, { useRef, useState } from 'react';
import { a, useSpring } from 'react-spring';

const useStyles = makeStyles(theme => ({
  containerCrewItem: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transition: 'all 2s ease-in-out',
    '& img': {
      transition: 'all 1.2s ease-in-out',
      transform: 'scale(1.05)',
    },
    '& [data-id="containerImage"]': {
      mixBlendMode: 'unset',
    },
    '&:hover': {
      transition: 'all 2s ease-in-out',
      '& img': {
        transition: 'all 1.2s ease-in-out',
        transform: 'scale(0.95)',
      },
      '& [data-id="containerImage"]': {
        mixBlendMode: 'color-burn',
      },
    }
  },
  containerImage: {
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
  },
  filterText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    // mixBlendMode: 'none',
    transition: 'all 1s ease-out',
    '&:hover': {
      opacity: 1,
      // mixBlendMode: 
    }
  }
}))

export const CrewCard = ({
  src,
  alt,
  name,
  role,
}:{
  src: string;
  alt?: string;
  name: string;
  role?: string; 
}) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();
  const rootRef = useRef();
  
//@ts-ignore
  const { s } = useSpring(() => ({
    s: hover == true ? 1.2 : 1,
    config: { mass: 2, tension: 150, friction: 100 }
  }));

  return (<GravityCard paperComponent='div' setRef={rootRef} PaperProps={{ elevation: 0 }} zm={1.3} className={classes.containerCrewItem}>
      <Box data-id="containerImage" className={classes.containerImage}>
        <img src={src} alt={alt} className={classes.img} />
      </Box>
      <div className={classes.filterText}>
        <Typography variant='body1'>{name}</Typography>
        <Typography variant='caption'>{role}</Typography>
      </div>
    </GravityCard>
  )
}