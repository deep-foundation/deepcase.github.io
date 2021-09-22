import { TokenProvider, useTokenController } from '@deepcase/deeplinks/imports/react-token';
import { ApolloClientTokenizedProvider } from '@deepcase/react-hasura/apollo-client-tokenized-provider';
import { useApolloClient } from '@deepcase/react-hasura/use-apollo-client';
import { LocalStoreProvider } from '@deepcase/store/local';
import { QueryStoreProvider } from '@deepcase/store/query';
import { colors, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { AuthProvider } from './auth';
import { Analitics } from './analitics';

const temp = createMuiTheme({});
const { breakpoints } = temp;

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
  },
  palette: {
    type: 'dark',
    background: {
      default: '#19202B',
      paper: '#00000030',
      // @ts-ignore
      dark: '#111720',
    },
    primary: colors.lightBlue,
    secondary: colors.lightGreen,
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
    MuiPaper: {
      outlined: {
        backgroundColor: '#111720',
        border: '0 linear transparent',
      },
      elevation0: {
        border: '0 linear transparent',
        backgroundColor: 'transparent',
      },
      elevation1: {
        border: '1px dashed #ffffff40',
      },
      elevation2: {
        border: '1px dashed #ffffff60',
      },
      elevation3: {
        border: '1px dashed #ffffff80',
      },
      elevation4: {
        border: '1px dashed #ffffff100',
      },
    },
  },
  shadows: ['none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none'],
});

export function Provider({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <Analitics
      yandexMetrikaAccounts={[84258358]}
      googleAnalyticsAccounts={['G-3WH4B0WR4L']}
    >
      <ThemeProvider theme={theme}>
        <QueryStoreProvider>
          <LocalStoreProvider>
            {children}
          </LocalStoreProvider>
        </QueryStoreProvider>
      </ThemeProvider>
    </Analitics>
  )
};
