import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Box } from '../imports/framework';
import { Provider } from '../imports/provider';
import { linksTheme } from '../imports/theme/build';

import { useScroll } from 'framer-motion';
import { DeepFrame } from '../imports/deep-case-frame/deep-frame';
import { AdaptiveSpace } from '../imports/space';


export default function Page () {
  return (
    <ChakraProvider theme={linksTheme}>
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
  
  
  return (<Box as='main' pos='relative' h='150vh'>
      {/* <Menu sx={{ width: '100%', bg: 'transparent', p: '4'}} /> */}
      <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} />
      <DeepFrame />
    </Box>
  );
});