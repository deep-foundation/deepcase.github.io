import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import { useSpring, a } from 'react-spring';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    width: (props: any) => `${props.width}%`,
    left: (props: any) => `${props.left}%`,
    top: (props: any) => `${props.top}%`,
  },
  image: {
    width: '100%'
  },
});

const trans1 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`;

export const LogoImage = ({
  src,
  alt = '',
  top = 0,
  left= 0,
  width = 3,
  spring,
}:{
  src: string;
  alt?: string;
  top?: number;
  left?: number;
  width?: number;
  spring?: any;
}) => {
  const classes = useStyles({
    width: width,
    left: left,
    top: top,
  });

  // const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  return(<a.div className={classes.container} style={{ transform: spring.xy.to(trans1) }}>
      <img src={src} alt={alt} className={classes.image}/>
    </a.div>
  )
}


//style={{width: `${width}${unit}`, position: 'absolute', left: `${left}${unit}`, top: `${top}${unit}`}}