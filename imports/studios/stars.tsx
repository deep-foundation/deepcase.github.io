import React from 'react';
import { Box, keyframes, usePrefersReducedMotion } from '../framework';


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
    <Box 
      sx={{
        ...elements,
        bg: '#000 url(./stars.png) repeat top center',
        zIndex: 0,
      }} />
    <Box 
      sx={{
        ...elements,
        bg: 'transparent url(./twinkling.png) repeat top center',
        zIndex: 1,
      }} 
      animation={animation} />
  </>)
})