import { ChakraProvider } from '@chakra-ui/react';
import detectBrowserLanguage from 'detect-browser-language';
import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Center } from '../imports/framework';
import { MainTasks } from '../imports/guild/main-tasks';
import { Welcome } from '../imports/guild/welcome';
import { FlexSection, FluidGrid } from '../imports/layout';
import { Provider } from '../imports/provider';
import { Space, AdaptiveSpace } from '../imports/space';
import { studiosTheme } from '../imports/theme/build';
import TrackVisibility from 'react-on-screen';

import { MapText } from '../imports/guild/map-text';
import { MapSvgDrawCont } from '../imports/icons/mapDrawCont';


export default function Page () {
  return (
    <ChakraProvider theme={studiosTheme}>
      <Provider>
        <PageContent />
      </Provider>
    </ChakraProvider>
  );
};

export const PageContent = React.memo(() => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(process.browser ? detectBrowserLanguage() : 'en-US');
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);
  const refArea = useRef<HTMLDivElement>(null);
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }
  
  return (<Box as='main' >
      <AdaptiveSpace unit={{sm: '2rem', md: '12rem'}} />
      <Box as='section'>
        <Welcome />
      </Box>
      <AdaptiveSpace unit={{sm: '6rem', md: '12rem'}} />
      <Center as='section'>
        <MainTasks />
      </Center>
      <Space unit={12} />
      <FlexSection position='relative'>
      {/* <TrackVisibility> */}
        {/* <MapSvgDrawCont /> */}
      {/* </TrackVisibility> */}
        {/* <MapText /> */}
      </FlexSection>
    </Box>
  );
});