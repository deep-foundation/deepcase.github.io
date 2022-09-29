import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Box } from '../imports/framework';
import { Provider } from '../imports/provider';
import { coreTheme } from '../imports/theme/build';

import { useScroll } from 'framer-motion';
import { Blob } from '../imports/form-blob';
import { InvitationToTheCave } from '../imports/invitation-to-the-cave';
import { Backdrop } from '../imports/backdrop';
import { TalksFormCust } from '../imports/invitation-modal';
// import { motion, useScroll } from "framer-motion";


export default function Page () {
  return (
    <ChakraProvider theme={coreTheme}>
      <Provider>
        <PageContent />
      </Provider>
    </ChakraProvider>
  );
};

export const PageContent = React.memo(() => {

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest)
    })
  }, [])
  
  
  return (<Box as='main' pos='relative' w='100vw'>
      {/* <Menu sx={{ width: '100%', bg: 'transparent', p: '4'}} /> */}
      {/* <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} /> */}
        <Box 
          as='section'
          h='100vh'
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxH: '80vh',
          }}
        >
          <TalksFormCust />
        </Box>
    </Box>
  );
});