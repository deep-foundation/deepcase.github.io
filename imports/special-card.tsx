import React, { useEffect, useRef } from 'react';
import { Box, Typography, makeStyles, GravityCard } from './framework';

import { darken } from '@material-ui/core/styles';
import { Space } from './space';
import { useSpring, a } from 'react-spring';


const useStyles = makeStyles(theme => ({
  wrapperMain: {
    // display: 'flex',
    // flexDirection: 'column',
    // width: '100%',
    // height: '100%',
  },
  wrapperUp: {
    overflow: 'hidden',
  },
  wrapperDown: {
    overflow: 'hidden',
  },
  container: {
    background: darken(theme?.palette?.background?.default, 0.5),
    width: '100%',
    height: '100%',
    boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  corner: {
    background: darken(theme?.palette?.background?.default, 0.5),
    width: '100%',
    height: '100%',
    boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)', 
    borderRadius: 5,
    transform: 'rotate(45deg)',
  }
}))

const trans1 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`;
var x = -1;
var y = -1;
if (typeof(window) === 'object') {
  document.onmousemove = function(event) {
    x = event.pageX;
    y = event.pageY;
  }
}

export const SpecialCard = ({
  title,
  src,
  alt,
  description,
  boxProps,
  icon,
}:{
  title: string;
  src?: string;
  alt?: string;
  description?: string;
  boxProps?: any;
  icon?: any;
}) => {
  const classes = useStyles();

  const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const ref = useRef<any>();
  const setRef = useRef<any>();

  const localCalc = (x, y) => {
    const box = ref?.current?.getBoundingClientRect();
    return [x - (box.left + (box.width / 2)), y - (box.top + (box.height / 2))];
  };
  
  useEffect(() => {
    const i = setInterval(() => {
      const box = ref?.current?.getBoundingClientRect();
      const { left, top, right, bottom } = box;
      if (!(left < x && right > x && top < y && bottom > y)) {
        set({xy: [0,0]})
        setRef.current({ xys: [0, 0, 1] });
      }
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (<GravityCard style={{ height: 200, width: '100%' }} setRef={setRef}>
      <div className={classes.wrapperMain} ref={ref} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: localCalc(x, y) })}
    onMouseLeave={() => set({xy: [0,0]})}>
        <div className={classes.wrapperUp}>
          <Box className={classes.container} {...boxProps}>
            {icon}

            <Typography variant='h5' align='center'>{title}</Typography>
            {/* <img src={src} alt={alt} /> */}
            <Space />
            <a.div style={{ transform: spring.xy.to(trans1) }}>
              <Typography variant='body2' align='center'>{description}</Typography>
            </a.div>
          </Box>
        </div>
        <div className={classes.wrapperDown}>
          <Box className={classes.corner} />
        </div>
      </div>
    </GravityCard>
  )
}