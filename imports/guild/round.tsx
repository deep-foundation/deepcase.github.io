import React from 'react';
import { Box, Center } from '../framework';
import { motion } from 'framer-motion'
import { Stars } from './stars';
import { FlyingWords } from './flying-words/flying-words';
import { FlyingWordsEn } from './flying-words/flying-words-en';
import { useTranslation } from 'react-i18next';

export const MotionBox = motion<any>(Box);


export const Round = React.memo(({
  props,
}:{
  [key:string]: any;
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return(
    <Center 
      pos='relative' 
      w='calc(16rem + 9.5vmax)'
      h='calc(16rem + 9.5vmax)'
      px={4}
    >
      <MotionBox 
        sx={{
          mixBlendMode: 'color-dodge',
          width: 'calc(16rem + 9.5vmax)',
          height: 'calc(16rem + 9.5vmax)',
          
        }}
        pos='absolute'
        top='0'
        left='0'
        borderRadius='63% 36% 47% 52% / 63% 45% 54% 19% ' 
        bg='linear-gradient(34deg, rgba(81,0,134, 0.7) 19%, rgba(0,7,139, 0.7) 44%, rgba(213,0,147, 0.7) 100%)' 
        animate={{
          rotate: -360,
          scale: 0.85
        }}
        transition={{ delay: 5, duration: 20, repeat: Infinity, repeatType: "reverse" }}
        {...props}
      />
      <MotionBox 
        sx={{
          width: 'calc(16rem + 9.5vmax)',
          height: 'calc(16rem + 9.5vmax)',
          
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
          pos: 'absolute',
          top: '0',
          left: '0',
          width: 'calc(19rem + 9.5vmax)',
          height: 'calc(16rem + 9.5vmax)',
          '@media(max-width: 510px)': {
            width: '100%',
            height: '100%',
          }, 
        }}
        borderRadius='23% 38% 16% 59% / 16% 29% 27% 34%' 
        bg='linear-gradient(34deg, rgba(81,0,134, 0.25) 19%, rgba(0,7,139, 0.25) 44%, rgba(213,0,147, 0.25) 100%)' 
        animate={{
          rotate: -360,
          scale: 0.8, 
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse"}}
        {...props}
      />
      <MotionBox 
        sx={{
          mixBlendMode: 'plus-lighter',
          width: 'calc(16rem + 9.5vmax)',
          height: 'calc(16rem + 9.5vmax)',
          
        }}
        pos='absolute'
        top='0'
        left='0'
        borderRadius='30% 70% 64% 36% / 42% 30% 70% 58%' 
        bg='radial-gradient(circle, rgba(11,0,46,1) 0%, rgba(81,0,134,1) 50%, rgba(213,101,0,1) 100%)' 
        animate={{
          rotate: 360,
          scale: 0.95
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        {...props}
      />
      <Center sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          '@media(max-width: 325px)': {
            w: '100%'
          }
        }}
      >
       {lang == 'en' ? <FlyingWordsEn /> : <FlyingWords />}
      </Center>
    </Center>)
})