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
import { coreTheme, linksTheme } from '../imports/theme/build';

import { MapText } from '../imports/guild/map-text';
import { MapSvgDrawCont } from '../imports/icons/mapDrawCont';
import { AppSS } from '../imports/guild/menu-animation';
import { useScroll } from 'framer-motion';
import { Values } from '../imports/guild/values/values';
import { Documentation } from '../imports/links/documentation';
// import { motion, useScroll } from "framer-motion";


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
  
  
  return (<Box as='main' pos='relative'>
      {/* <Menu sx={{ width: '100%', bg: 'transparent', p: '4'}} /> */}
      {/* <AdaptiveSpace unit={{sm: '2rem', md: '6rem'}} /> */}
      <Documentation />
    </Box>
  );
});