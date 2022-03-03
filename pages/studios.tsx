import React, { useCallback, useState } from 'react';
import { Provider } from '../imports/provider';
import { Welcome } from '../imports/studios/welcome';
import { ChakraProvider } from '@chakra-ui/react'
import { studiosTheme } from '../imports/theme/build';
import { useTranslation } from 'react-i18next';
import detectBrowserLanguage from 'detect-browser-language';
import { Space } from '../imports/space';
import { MainTasks } from '../imports/studios/main-tasks';
import { Box } from '../imports/framework';
import { FlexSection } from '../imports/studios/flex-section';


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
      <Space unit={12} />
      <Box as='section'>
        <Welcome />
      </Box>
      <Space unit={12} />
      <FlexSection >
        <MainTasks  />
      </FlexSection>
    </Box>
  );
});