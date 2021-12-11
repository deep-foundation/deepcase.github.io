import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles({
  image: {
    width: '100%'
  },
});

export const LogoImage = ({
  src,
  alt = '',
  top = 0,
  left= 0,
  width = 3,
  unit = '%',
}:{
  src: string;
  alt?: string;
  top?: number;
  left?: number;
  width?: number;
  unit?: string;
}) => {
  const classes = useStyles();

  return(<Box sx={{width: `${width}${unit}`, position: 'absolute', left: `${left}${unit}`, top: `${top}${unit}`}}>
      <img src={src} alt={alt} className={classes.image} />
    </Box>
  )
}