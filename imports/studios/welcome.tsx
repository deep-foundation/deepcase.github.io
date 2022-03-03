import React from 'react';
import { GridArea } from '../grid-area';
import { Grid, Box } from '../framework';
import { Round } from './round';
import { motion } from 'framer-motion'
import { H1, H2 } from '../headers';

export const MotionBox = motion<any>(Box);


export const Welcome = React.memo(() => {

  return (<GridArea repeat={12} columnsZone='2/11' mediaColumnsZone='1/12'>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: '5em',
          height: '40vh',
          '@media(max-width: 825px)': {
            display: 'flex',
            flexDirection: 'column-reverse'
          }
        }}
      >
        <Box
          w='100%'
          h='100%'
          pos='relative'
        >
          <Round />
          <Box pos='absolute' top='50%' left='0' transform='translateY(-50%)' w='100%' >
            <H2 color='light'>Kомьюнити последователей культа глубины (Deep), формирующееся вокруг продуктов экосистемы Deep.Foundation
            </H2>
          </Box>
        </Box>
        <Box display='flex' w='100%' h='100%' justifyContent='center' flexDirection='column'>
          <Box w='100%' justifyItems='flex-start'>
            <H1
              sx={{
                '@media(min-width: 825px)': {
                  fontSize: '7rem'
                }
              }}
            >Deep</H1>
          </Box>
          <Box w='100%'>
            <H1 
              align='end'
              sx={{
                '@media(min-width: 825px)': {
                  fontSize: '7rem'
                }
              }}
            >Studios</H1>
          </Box>
        </Box>
      </Box>
    </GridArea>)
})