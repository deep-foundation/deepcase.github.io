import 'normalize.css';
import 'react-round-carousel/dist/index.css';
import '../imports/index.css';

import { ChakraProvider } from '@chakra-ui/react'

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { theme } from '../imports/theme/build';
import jQuery from 'jquery';

import { QueryStoreProvider } from '@deepcase/store/query';
import '../imports/i18n';

global.jQuery = jQuery;

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Deep.Foundation</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <QueryStoreProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryStoreProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

