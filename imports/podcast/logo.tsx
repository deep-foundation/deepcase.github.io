import React from 'react';
import { a } from 'react-spring';
import { makeStyles } from '../framework';


const useStyles = makeStyles({
  container: {
    position: 'absolute',
    width: (props: any) => `${props.width}%`,
    left: (props: any) => `${props.left}%`,
    top: (props: any) => `${props.top}%`,
  },
});

const trans1 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`;

export const LogoImage = React.memo(({
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

  return(<a.div className={classes.container} style={{ transform: spring.xy.to(trans1) }}>
      <img src={src} alt={alt} width='100%' height='100%' />
    </a.div>
  )
})
