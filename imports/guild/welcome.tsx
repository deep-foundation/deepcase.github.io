import { motion } from 'framer-motion';
import React from 'react';
import { Box } from '../framework';
import { GridArea } from '../layout';
import { DeepGuild } from './deep-guild/deep-guild';
import { Round } from './round';
import { SplitedText } from './splited-text';


export const MotionBox = motion<any>(Box);


export const Welcome = React.memo(() => {

  return (<GridArea repeat={12} columnsZone='2/12' mediaColumnsZone='1/13'>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '0.8fr 1fr',
          columnGap: '3em',
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
            <SplitedText />
          </Box>
        </Box>
        <Box display='flex' w='100%' h='100%' justifyContent='center' flexDirection='column'>
          <Box w='100%' justifyItems='flex-start'>
            <DeepGuild />
          </Box>
        </Box>
      </Box>
    </GridArea>)
})