import { Metadata } from 'next';
import { theme } from '../imports/theme/build';
import Script from 'next/script';
import { QueryStoreProvider } from '@deep-foundation/store/query';
import { ChakraProvider } from '../imports/framework';
import React from 'react';


export const metadata: Metadata = {
  title: 'Deep Foundation',
  authors: [{ name: 'Deep Foundation' }, { name: 'Deep Foundation', url: 'https://deep.foundation' }],
  keywords: ['Deep Foundation', 'React', 'JavaScript'],
  themeColor: theme.colors.dark,
  applicationName: 'Deep Foundation',
  description: 'Deep Foundation',
  icons: {
    icon: 'image/png',
    shortcut: 'image/png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
  },
  category: 'technology',
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    //   'de-DE': '/de-DE',
    // },

  },
  openGraph: {
    images: '/logo_n.svg',
  },

}


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (<html lang="en">
      <Script
      id="show-banner"
      dangerouslySetInnerHTML={{
        __html: `document.getElementById('banner').classList.remove('hidden')`,
        }}
      />
      <body>
        <QueryStoreProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </QueryStoreProvider>
      </body>
    </html>
  )
};
