import { LocalStoreProvider } from '@deepcase/store/local';
import { QueryStoreProvider } from '@deepcase/store/query';
import { colors, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Analitics } from './analitics';

const temp = createMuiTheme({});
const { breakpoints } = temp;

export const theme1 = createMuiTheme({
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

export const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#000',
      dark: '#000',
    },
  },
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
    h1: {
      fontSize: "6rem",
      [breakpoints.down("xs")]: {
        fontSize: "3rem"
      }
    },
    h2: {
      fontSize: "3.75rem",
      [breakpoints.down("xs")]: {
        fontSize: "2.2rem"
      }
    },
    h3: {
      fontSize: "3rem",
      [breakpoints.down("xs")]: {
        fontSize: "2rem"
      }
    },
    h4: {
      fontSize: "2.125rem",
      [breakpoints.down("xs")]: {
        fontSize: "1.8rem"
      }
    }
  },
  overrides: {
    MuiButton: {
      label: {
        fontSize: 20,
        textTransform: 'none',
      },
    },
  },
});

export function Provider({
  theme = theme2,
  children,
}: {
  theme?: any;
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
