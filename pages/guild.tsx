import { ChakraProvider } from '@chakra-ui/react';
import detectBrowserLanguage from 'detect-browser-language';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import VisibilitySensor from 'react-visibility-sensor';
import { Box, Center, Container } from '../imports/framework';
import { Menu } from '../imports/guild/menu';
import { MainTasks } from '../imports/guild/main-tasks';
import { Welcome } from '../imports/guild/welcome';
import { FlexSection } from '../imports/layout';
import { Provider } from '../imports/provider';
import { AdaptiveSpace, Space } from '../imports/space';
import { guildTheme } from '../imports/theme/build';

import { MapText } from '../imports/guild/map-text';
import { MapSvgDrawCont } from '../imports/icons/mapDrawCont';
import { AppSS } from '../imports/guild/menu-animation';
import { useScroll } from 'framer-motion';
import { Values } from '../imports/guild/values/values';
// import { motion, useScroll } from "framer-motion";


export default function Page () {
  return (
    <ChakraProvider theme={guildTheme}>
      <Provider>
        <PageContent />
      </Provider>
    </ChakraProvider>
  );
};

export const PageContent = React.memo(() => {
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest)
    })
  }, [])
  
  
  return (<Box as='main' pos='relative'>
      <Menu sx={{ width: '100%', bg: 'transparent', p: '4'}} />
      <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} />
      <Box as='section'>
        <Welcome />
      </Box>
      <AdaptiveSpace unit={{sm: '6rem', md: '12rem'}} />
      <Center as='section'>
        <MainTasks />
      </Center>
      <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} />
      <Center width='100%' sx={{position: 'relative'}}>
        <MapSvgDrawCont />
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
      <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} />
      {/* <FlexSection position='relative' height='100%'>
        <ValuesGrid />
      </FlexSection> */}
      <FlexSection position='relative' height='100%'>
        <Values />
      </FlexSection>
      <Space unit={52} />
      <AppSS />
    </Box>
  );
});