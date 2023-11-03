import { Box, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';


const transition = {
  type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
};

export const BoxShadow = React.memo<any>(({
  blockWidth = 300,
  blockHeight = 300,
  borderRadius = '0.3rem',
  position = 'relative',
  onTapButton,
  children,
  styles,
  animate = 'start',
  onMouseRef,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  borderRadius?: string;
  position?: string;
  onTapButton?: () => any;
  children: any;
  styles?: any;
  animate?: any;
  onMouseRef?: any;
  [key:string]: any;
}) => {
 
  const { colorMode } = useColorMode();
  const variants = {
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1], transition },
    hoverState: {
      boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', transition },
    tapState: { boxShadow: colorMode === 'light' ? '0 0px 5px 2px #0000001a' : '0 0px 5px 0px #4b5cfb', transition },
  };

  return (<Box as={motion.div}
          ref={onMouseRef?.current && onMouseRef.current()}
          style={{
            width: blockWidth,
            height: blockHeight,
            position: position,
            borderRadius: borderRadius,
            overflow: 'hidden',
            ...styles,
          }}
          variants={variants}
          animate={animate}
          whileHover="hoverState"
          whileTap="tapState"
        >
          {children}
        </Box>
  )
})