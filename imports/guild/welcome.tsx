import { motion } from 'framer-motion';
import React from 'react';
import { Box } from '../framework';
import { FluidGrid, GridArea } from '../layout';
import { DeepGuild } from './deep-guild/deep-guild';
import { Round } from './round';


export const Welcome = React.memo(() => {

  return (
  // <GridArea repeat={12} columnsZone='2/12' mediaColumnsZone='1/13'>
    <FluidGrid>
      <Box
        display='grid'
        gridTemplateColumns='0.8fr 1fr'
        height={{sm: '80vh', md: '40vh'}}
        sx={{
          columnGap: '3em',
          '@media(max-width: 825px)': {
            display: 'flex',
            flexDirection: 'column-reverse',
            p: '0 1rem',
          }
        }}
      >
        <Box
          w='100%'
          h='100%'
          pos='relative'
        >
          <Round />
        </Box>
        <Box display='flex' w='100%' h='100%' justifyContent='center' flexDirection='column'>
          <Box w='100%' justifyItems='flex-start'>
            <DeepGuild />
          </Box>
        </Box>
      </Box>
    </FluidGrid>
    // </GridArea>
  )
})