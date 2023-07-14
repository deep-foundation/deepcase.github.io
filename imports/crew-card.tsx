import React, { useRef } from 'react';
import { Box, GravityCard, Img, Text } from './framework';


const containerCrewItem = {
  width: '100%',
  height: '100%',
  position: 'relative',
  transition: 'all 2s ease-in-out',
};

const containerImage = {
  // top: '8%', left: '15%',
  top: 0, left: 0,
  background: 'transparent', 
  overflow: 'hidden',
  boxSizing: 'border-box',
  boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',
  borderRadius: '50%',
  width: ' calc(200px + 0.5vmax)',
  height: ' calc(200px + 0.5vmax)',
  display: 'flex',
  alignItems: 'self-start',
  margin: '0 auto',
  transition: 'all 1.2s ease-in-out',
  transform: 'scale(1.05)',
  mixBlendMode: 'unset',
};
const filterText = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0, left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  boxSizing: 'border-box',
  padding: '0 0.5rem',
  transition: 'all 1s ease-out',
};

export const CrewCard = React.memo(({
  src,
  alt,
  name,
  role,
}:{
  src: string;
  alt?: string;
  name: string;
  role?: string; 
}) => {
  
  const rootRef = useRef();

  return (
    <GravityCard paperComponent='div' setRef={rootRef} PaperProps={{ elevation: 0 }} zm={1.3} className='card' style={{
      _hover: {
        transition: 'all 2s ease-in-out',
      },
      ...containerCrewItem
    }}>
      <Box 
        position='relative'
        w='100%'
        h='100%'
      >
        <Box data-id="containerImage" position='relative' sx={{
          '.card:hover &': {
                filter: 'brightness(0.1)',
          },
          ...containerImage}}>
          <Img 
            src={src} 
            alt={alt} 
            htmlWidth='100%' 
            sx={{
              '.card:hover &': {
                transition: 'all 1.2s ease-in-out',
                transform: 'scale(0.95)',
              }
            }}
          />
        </Box>
        <Box data-id="containerImage" position='absolute' sx={{
          ...containerImage}}>
          <Img 
            src={src} 
            alt={alt} 
            htmlWidth='100%' 
            sx={{
              '.card:hover &': {
                  transition: 'all 1.2s ease-in-out',
                  transform: 'scale(0.95)',
                  filter: 'brightness(0.1)',
                },
            }}
          />
          <Box 
            sx={{
              '.card:hover &': {
                opacity: 1,
                mixBlendMode: 'difference',
              },
              ...filterText
            }}
          >
            <Text fontSize='lg'>{name}</Text>
            <Text fontSize='md' align='center'>{role}</Text>
          </Box>
        </Box>
      </Box>
    </GravityCard>
  )
})