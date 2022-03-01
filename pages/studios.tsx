import React from 'react';
import { Provider } from '../imports/provider';
import { Round } from '../imports/studios/round';
import { ChakraProvider } from '@chakra-ui/react'
import { studiosTheme } from '../imports/theme/build';


export default function Page () {
  return (
    <ChakraProvider theme={studiosTheme}>
      <Provider>
        <Round />
      </Provider>
    </ChakraProvider>
  );
};