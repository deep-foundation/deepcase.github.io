import { Box, Img, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useInView, animate, useMotionValue, useSpring, useTransform, inView } from 'framer-motion';
import React, { memo, useRef, useState } from 'react';
import { BoxShadow } from '../box-shadow';
import { DeepFlag } from './deep-flag';


const transition = {
  type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
};

export const DeepFrameMouseShift = memo<any>(function DeepFrameMouseShift({
  blockWidth = 370,
  blockHeight = 370,
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
  const ref = useRef<any>(null);
  const viewRef = useRef<any>();
  const isInView = useInView(ref, { once: true });
  const [max450] = useMediaQuery("(max-width: 450px)");
  const CENTER = 225;
  var xMotion = useSpring(0, { stiffness: 150, damping: 40 });
  var yMotion = useSpring(0, { stiffness: 200 });
    
  const x = useMotionValue(CENTER);
  const y = useMotionValue(CENTER);
  const springX = useSpring(x, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  const springY = useSpring(y, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
      
  const shiftX = useTransform(springX, [0, 450], [-45, 45]);
  const shiftY = useTransform(springY, [0, 450], [-45, 45]);
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
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1], transition },
    hoverState: {
    boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 2px  #00000026', transition },
    tapState: { boxShadow: '0 0px 4px 0 #0000001a', transition },
  };

  const localCalc = (x, y) => {
    const box = ref?.current?.getBoundingClientRect();
    return [x - (box?.left + (box?.width / 2)), y - (box?.top + (box?.height / 1.7))];
  };

  return (<motion.div
      // ref={ref}
      style={{
        width: 450,
        height: 450,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        overflow: 'hidden',
      }}
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 100
      }}
      onMouseMove={(event) => {
        handleMouse(event);
        (xMotion.set(localCalc(event.clientX, event.clientY)[0]), yMotion.set(localCalc(event.clientX, event.clientY)[1]));
      }}
      onMouseLeave={() => {
        handleMouseLeave({ x: CENTER, y: CENTER });
        xMotion.set(CENTER);
        yMotion.set(CENTER);
      }}
      // onViewportLeave={inViewport}
    >
      <Box
        sx={{
          width: 350,
          height: 350,
          position: 'relative',
          borderRadius: '0.4rem',
        }}
      >
        <Box sx={{
          position: 'relative',
          height: '100%',
          overflow: 'hidden', 
          borderRadius: '0.3rem', 
          borderImageWidth: '0.1rem',
          borderImageSlice: 1,
          borderImageSource: colorMode === 'light' ? 'linear-gradient(38deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)' : 'none',
          // borderColor: '#'
          // border: colorMode === 'dark' ? 'none' : 'thin solid linear-gradient(38deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)'
        }}>
          {colorMode === 'dark' ? <Img src='/gradient.webp' w='calc(100% - 1px)' h='calc(100% - 1px)' sx={{position: 'absolute'}} /> : null} 
        </Box>
        <BoxShadow
          styles={{
            x: shiftX,
            y: shiftY,
            top: 0,
            left: 0,
          }}
          position='absolute'
          onMouseRef={viewRef}
          blockHeight={370}
          blockWidth={370}
        >
          <Box bg='flagBackground' w='100%' h='100%'>
            <DeepFlag 
              subtitle={subtitle}
              title={title}
              description={description}
              Icon = {Icon} 
              xMotion = {xMotion}
              yMotion = {yMotion}
            />
          </Box>
        </BoxShadow>
      </Box>
    </motion.div>
  )
})