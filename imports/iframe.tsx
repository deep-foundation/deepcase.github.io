import React, { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import { GravityCard, makeStyles, Typography } from './framework';

const useStyles = makeStyles(theme => ({
  frameContainer: {
    position: 'relative',
    aspectRatio: '16/9',
    '& > :first-child': {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      border: 'none',
    },
    '&:before': {
      content: "''",
      display: 'block',
      paddingBottom: 'calc(100% / (4/3)))',
    }
  },
  innerContainer: {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  titleDC: {
    position: 'absolute',
    top: '-2rem',
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    '& > :nth-child(1)': {
      marginRight: 'calc(1rem + 0.5vmax)',
    },
    '@media(max-width: 400px)': {
      flexDirection: 'column',
      marginBottom: '2rem',
    },
  },
}));

var x = -1;
var y = -1;
if (typeof(window) === 'object') {
  document.onmousemove = function(event) {
    x = event.pageX;
    y = event.pageY;
  }
}

export const IFrame = React.memo(({src}:{src: string;}) => {
  const classes = useStyles();
  const frameRef = useRef<any>();
  const refDiv = useRef<any>();

  const localCalc = (x, y) => {
    const box = refDiv?.current?.getBoundingClientRect();
    return [x - (box.left + (box.width / 2)), y - (box.top + (box.height / 2))];
  };

  const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  useEffect(() => {
    const i = setInterval(() => {
      const box = refDiv?.current?.getBoundingClientRect();
      const { left, top, right, bottom } = box;
      if (!(left < x && right > x && top < y && bottom > y)) {
        set({xy: [0,0]})
        frameRef.current({ xys: [0, 0, 1] });
      }
    }, 1000);
    return () => clearInterval(i);
  }, []);
  
  return (<GravityCard paperComponent={'div'} setRef={frameRef} xm={0.02} ym={0.02}>
      <div ref={refDiv} className={classes.innerContainer}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: localCalc(x, y) })}
        onMouseLeave={() => set({xy: [0,0]})}
      >
        <div className={ classes.titleDC }>
          <Typography align="left" variant="h4">Deep.Case</Typography>
          <Typography align="left" variant="body2">pre alpha version</Typography>
        </div>
        <div className={classes.frameContainer}>
          <iframe src={src}
            width={1600}
            height={900}
            frameBorder={0}
          />
        </div>
      </div>
    </GravityCard>
  )
})