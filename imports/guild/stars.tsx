import React from 'react';
import { Box, keyframes, usePrefersReducedMotion } from '../framework';
import { MotionBox } from './round';


const moveTwinkBack = keyframes`
  from { 
    background-position: 0 0; 
  }
  to {
    background-position: -7000px 2000px; 
  }
`;

const elements = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  display: 'block',
};

export const Stars = React.memo(() => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${moveTwinkBack} 200s linear infinite`;

  return (<>
    <MotionBox 
      borderRadius='30% 70% 64% 36% / 42% 30% 70% 58%'
      animate={{
        rotate: 360,
        scale: 1.25
      }}
      transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      sx={{
        ...elements,
        width: 'calc(20rem + 9.5vmax)',
        height: 'calc(23rem + 9.5vmax)',
        '@media(max-width: 825px)': {
          width: '100%',
          height: '100%',
        }, 
          
        bg: '#000 url(./stars.png) repeat top center',
        zIndex: 0,
      }} />
    <MotionBox 
      borderRadius='30% 70% 64% 36% / 42% 30% 70% 58%'
      animate={{
        rotate: 360,
        scale: 0.5
      }}
      transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      sx={{
        ...elements,
        width: 'calc(15rem + 9.5vmax)',
        height: 'calc(17rem + 9.5vmax)',

        '@media(max-width: 825px)': {
          width: '100%',
          height: '100%',
        }, 
        bg: 'transparent url(./twinkling.png) repeat top center',
        zIndex: 1,
      }} 
      animation={animation} />
  </>)
})