import { ChakraProvider } from '@chakra-ui/react';
import detectBrowserLanguage from 'detect-browser-language';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../imports/framework';
import { MainTasks } from '../imports/guild/main-tasks';
import { Welcome } from '../imports/guild/welcome';
import { FlexSection, FluidGrid } from '../imports/layout';
import { Provider } from '../imports/provider';
import { Space, AdaptiveSpace } from '../imports/space';
import { studiosTheme } from '../imports/theme/build';

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
  
  return (<Box as='main'>
      <AdaptiveSpace unit={{sm: '2rem', md: '12rem'}} />
      <Box as='section'>
        <Welcome />
      </Box>
      <Space unit={12} />
      <FluidGrid >
        <MainTasks  />
      </FluidGrid>
      <Space unit={12} />
      {/* <FlexSection position='relative'>
        <MapSvgDrawCont />
        <MapText />
      </FlexSection> */}
      {/* <FlexSection position='relative'>
      <MapSvg />
      </FlexSection> */}
    </Box>
  );
});