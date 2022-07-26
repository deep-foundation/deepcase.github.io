import { motion } from 'framer-motion';
import React from 'react';
import { Box, Center } from '../framework';
import { FluidGrid, GridArea } from '../layout';
import { DeepGuild } from './deep-guild/deep-guild';
import { Round } from './round';


export const Welcome = React.memo(() => {

  return (<Center>
      <FluidGrid>
        <Center
          // display='grid'
          // gridTemplateColumns={{md: '0.8fr 1fr', xl: '0.5fr 1fr'}}
          display='flex'
          flexDirection='row'
          height={{sm: '80vh', md: 'calc(35vh + 0.5vmax)'}}
          p='0 2rem'
          sx={{
            // columnGap: '7rem',
            '@media(max-width: 825px)': {
              display: 'flex',
              flexDirection: 'column-reverse',
              p: '0 1rem',
            }
          }}
        >
          <Center
            w='100%'
            h='100%'
            pos='relative'
            pl={{sm: 0, md: '3rem', lg: '0rem'}}
          >
            <Round />
          </Center>
          <Box display='flex' w='100%' h='100%' justifyContent='center' flexDirection='column' pr={{sm: 0, lg: '3rem', xl: '5rem'}}>
            <Box w='100%' justifyItems='flex-start'>
              <DeepGuild />
            </Box>
          </Box>
        </Center>
      </FluidGrid>
    </Center>
  )
})