import React, { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import { GravityCard, AspectRatio, Box, useMediaQuery } from './framework';


const innerContainer = {
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  position: 'relative',
};
var x = -1;
var y = -1;
if (typeof(window) === 'object') {
  document.onmousemove = function(event) {
    x = event.pageX;
    y = event.pageY;
  }
}

export const IFrame = React.memo(({
  title, src, download, styles, icon,
}:{
  title?: any; src: string; download?: any; styles?: any; icon?: any;
}) => {
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
  const [max825] = useMediaQuery('(max-width: 825px)');
  
  return (<GravityCard paperComponent={'div'} setRef={frameRef} xm={0.01} ym={0.01} style={styles}>
      <Box ref={refDiv} sx={innerContainer}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: localCalc(x, y) })}
        onMouseLeave={() => set({xy: [0,0]})}
      >
        {icon}
        {title}
        <AspectRatio ratio={max825 ? 3 / 4 : 16 / 9}>
          <iframe src={src}
            width='100%'
            height='100%'
            frameBorder={0}
            allowFullScreen
            title='deep case editor'
          />
        </AspectRatio>
        {download}
      </Box>
    </GravityCard>
  )
})