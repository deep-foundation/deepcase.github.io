import React from 'react';
import { Box } from '../framework';
import { motion } from 'framer-motion'
import { Stars } from './stars';

export const MotionBox = motion<any>(Box);


export const Round = React.memo(({props}:any) => {
  return(<Box pos='relative' w='100%' h='100%'>
      
      <MotionBox 
        sx={{
          width: 'calc(20rem + 9.5vmax)',
          height: 'calc(23rem + 9.5vmax)',
          '@media(max-width: 825px)': {
            width: '100%',
            height: '100%',
          } 
          
        }}
        pos='absolute'
        top='0'
        left='0'
        borderRadius='63% 36% 47% 52% / 63% 45% 54% 19% ' 
        bg='linear-gradient(34deg, rgba(81,0,134, 0.7) 19%, rgba(0,7,139, 0.7) 44%, rgba(213,0,147, 0.7) 100%)' 
        animate={{
          rotate: -360,
          scale: 1.15
        }}
        transition={{ delay: 5, duration: 20, repeat: Infinity, repeatType: "reverse" }}
        {...props}
      />
      <MotionBox 
        sx={{
          width: 'calc(20rem + 9.5vmax)',
          height: 'calc(23rem + 9.5vmax)',
          '@media(max-width: 825px)': {
            width: '100%',
            height: '100%',
          } 
          
        }}
        pos='absolute'
        top='0'
        left='0'
        borderRadius='63% 48% 47% 52% / 48% 45% 54% 45%' 
        bg='linear-gradient(34deg, rgba(81,0,134, 0.5) 19%, rgba(0,7,139, 0.5) 44%, rgba(213,0,147, 0.5) 100%)' 
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 27, repeat: Infinity, }}
        {...props}
      />
      <MotionBox 
        sx={{
          width: 'calc(19rem + 9.5vmax)',
          height: 'calc(22rem + 9.5vmax)',
          '@media(max-width: 825px)': {
            width: '100%',
            height: '100%',
          } 
          
        }}
        pos='absolute'
        top='0'
        left='0'
        borderRadius='23% 38% 16% 59% / 16% 29% 27% 34%' 
        bg='linear-gradient(34deg, rgba(81,0,134, 0.25) 19%, rgba(0,7,139, 0.25) 44%, rgba(213,0,147, 0.25) 100%)' 
        animate={{
          rotate: -360,
          scale: 1.2, 
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse"}}
        {...props}
      />
      <MotionBox 
        sx={{
          width: 'calc(20rem + 9.5vmax)',
          height: 'calc(23rem + 9.5vmax)',
          '@media(max-width: 825px)': {
            width: '100%',
            height: '100%',
          } 
          
        }}
        pos='absolute'
        top='0'
        left='0'
        borderRadius='30% 70% 64% 36% / 42% 30% 70% 58%' 
        bg='radial-gradient(circle, rgba(11,0,46,1) 0%, rgba(81,0,134,1) 50%, rgba(213,101,0,1) 100%)' 
        // bg='linear-gradient(34deg, rgba(81,0,134,1) 19%, rgba(0,7,139,1) 44%, rgba(213,0,147,1) 100%)' 
        animate={{
          rotate: 360,
          scale: 1.25
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        {...props}
      />
      <Box
        sx={{
          width: 'calc(12rem + 9.5vmax)',
          height: 'calc(15rem + 9.5vmax)',
          '@media(max-width: 825px)': {
            width: '100%',
            height: '100%',
          } 
          
        }}
        pos='absolute'
        top='50%'
        left='50%'
        transform='translate(-50% , -50%)'
        overflow='hidden'
        borderRadius='23% 38% 16% 59% / 16% 29% 27% 34%' 
      >
        <Box 
          pos='relative' 
          width='calc(20rem + 9.5vmax)'
          height='calc(23rem + 9.5vmax)'
        >
          <Stars />
        </Box>
      </Box>
    </Box>)
})