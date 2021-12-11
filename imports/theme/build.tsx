import { colors } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

import createCache from '@emotion/cache';

export const cache = createCache({ 
  key: 'css',
  prepend: true,
});

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const temp = createTheme({});
const { breakpoints } = temp;

export const theme1 = createTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
    caption:{
      lineHeight: 1,
    },
    overline: {
      lineHeight: 0,
    }
  },
  palette: {
    mode: 'dark',
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

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // lineHeight: 0,
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
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
    }
  },
  shadows: ['none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none'],
});

export const theme2 = createTheme({
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 20,
          textTransform: 'none',
        },
      }
    }
  }
});