import { ChakraProvider } from '@chakra-ui/react';
import detectBrowserLanguage from 'detect-browser-language';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import VisibilitySensor from 'react-visibility-sensor';
import { Box, Center, Container } from '../imports/framework';
import { Menu } from '../imports/guild/deep-guild/menu';
import { MainTasks } from '../imports/guild/main-tasks';
import { Welcome } from '../imports/guild/welcome';
import { FlexSection } from '../imports/layout';
import { Provider } from '../imports/provider';
import { AdaptiveSpace, Space } from '../imports/space';
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
  
  
  return (<Box as='main' pos='relative'>
      <Menu sx={{position: 'fixed', width: '100%', bg: 'transparent', p: '4'}} onClick={changeLanguage} />
      <AdaptiveSpace unit={{sm: '2rem', md: '12rem'}} />
      <Box as='section'>
        <Welcome lang={language} />
      </Box>
      <AdaptiveSpace unit={{sm: '6rem', md: '12rem'}} />
      <Center as='section'>
        <MainTasks />
      </Center>
      <AdaptiveSpace unit={{sm: '6rem', md: '12rem'}} />
      <FlexSection position='relative' height='100%'>
        
      <Center width='100%' sx={{position: 'relative'}}>
        <VisibilitySensor partialVisibility={true}>
          {({isVisible}) =>
            <Center width='100%' height='max-content'><MapSvgDrawCont /></Center>
          }
        </VisibilitySensor>
        
        <Container 
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100%',
          }}
        >
          <MapText />
        </Container>
      </Center>
     
      </FlexSection>
      <Space unit={52} />
    </Box>
  );
});