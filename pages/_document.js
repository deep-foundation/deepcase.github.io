import { theme } from '../imports/theme/build';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.colors.dark} />
          <meta name="description" content="Deep Foundation" />
          <link rel="/logo.png" href="image url" />
          <meta property="og:image" content="/logo.png" />
          {/* <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" /> */}
         
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
       
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3WH4B0WR4L');
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
