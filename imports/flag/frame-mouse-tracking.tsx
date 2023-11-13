import { Box, useColorMode } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { memo, useRef, useState } from 'react';
import { BoxShadow } from '../box-shadow';
import { DeepFlag } from './deep-flag';

export const DeepFrameMouseTracking = memo<any>(function DeepFrameMouseTracking({
  blockWidth = 350,
  blockHeight = 350,
  // onTapButton,
  subtitle,
  title,
  description,
  Icon = React.Fragment,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  // onTapButton?: () => any;
  subtitle: string;
  title: string;
  description: string;
  Icon?: any;
  [key:string]: any;
}) {
  const [current, setCurrent] = useState(1);
  const ref = useRef<any>();
  const viewRef = useRef<any>();
  const CENTER = 225;


  var xMotion = useSpring(0, { stiffness: 150, damping: 40 });
  var yMotion = useSpring(0, { stiffness: 200 });
    
  const x = useMotionValue(CENTER);
  const y = useMotionValue(CENTER);
  const springX = useSpring(x, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  const springY = useSpring(y, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
    
  const rotateX = useTransform(springX, [0, 450], [-45, 45]);
  const rotateY = useTransform(springY, [0, 450], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
  x.set((event.clientX - (rect.left)));
  y.set(event.clientY - (rect.top));
  }
  function handleMouseLeave({x: nx, y: ny}) {
      x.set(nx);
      y.set(ny);
  }

  const { colorMode } = useColorMode();
  
  const variants = {
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1] },
    hoverState: {
      boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 2px  #00000026'  },
    tapState: { boxShadow: '0 0px 4px 0 #0000001a' },
  };

  const inViewport = useDebounceCallback(() => {
    setCurrent(0);
  }, 2000);
  
  const isInView = useInView(viewRef);

  const localCalc = (x, y) => {
    const box = ref?.current?.getBoundingClientRect();
    return [x - (box.left + (box.width / 2)), y - (box.top + (box.height / 1.7))];
  };

  return (<motion.div
      ref={ref}
      style={{
        width: 450,
        height: 450,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 450,
        overflow: 'hidden',
      }}
      onMouseMove={(event) => {
        handleMouse(event);
        (xMotion.set(localCalc(event.clientX, event.clientY)[0]), yMotion.set(localCalc(event.clientX, event.clientY)[1]));
      }}
      onMouseLeave={() => {
        handleMouseLeave({ x: CENTER, y: CENTER })
        xMotion.set(CENTER);
        yMotion.set(CENTER);
      }}
      onViewportLeave={inViewport}
    >
      <BoxShadow
        styles={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        <Box bg='flagBackground' w='100%' h='100%'>
          <DeepFlag 
            subtitle={subtitle}
            title={title}
            description={description}
            Icon = {Icon} 
            // xMotion = {xMotion}
            // yMotion = {yMotion}
          />
        </Box>
      </BoxShadow>
    </motion.div>
  )
})