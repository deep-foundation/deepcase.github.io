import { colors, createMuiTheme, darken } from '@material-ui/core';


const temp = createMuiTheme({});
const { breakpoints } = temp;

export const coreTheme = createMuiTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
    h1: {
      fontSize: 'calc(32px + 0.5vmax)',
      fontWeight: 700,
    },
    h2: {
      fontSize: 'calc(26px + 0.5vmax)',
      fontWeight: 700,
      color: '#fff',
    },
    h3: {
      fontSize: 'calc(24px + 0.5vmax)',
      fontWeight: 600,
    },
    h4: {
      fontSize: 'calc(22px + 0.5vmax)',
      fontWeight: 500,
    },
    h5: {
      fontSize: 'calc(18px + 0.5vmax)',
      fontWeight: 500,
    },
    body1: {
      fontSize: 'calc(16px + 0.5vmax)',
      fontWeight: 300,
      lineHeight: 'calc(1.1em + 0.5vmax)',
    },
    body2: {
      fontSize: 'calc(14px + 0.5vmax)',
      fontWeight: 300,
      color: '#fff',
      // lineHeight: 'calc(0.975em + 0.5vmax)',
    },
    caption:{
      fontSize: 'calc(12px + 0.3vmax)',
      lineHeight: 'calc(0.45em + 0.5vmax)',
      textTransform: 'none',
      color: '#fff',
    },
    overline: {
      fontSize: 'calc(12px + 0.5vmax)',
      lineHeight: 'calc(0.45em + 0.5vmax)',
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
    text: {
      primary: '#fff',
    }
  },
  shape: {
    borderRadius: 0,
  },
});
export const theme1 = createMuiTheme({
  ...coreTheme,
  
  overrides: {
    MuiButton: {
      label: {
        fontSize: 'calc(12px + 0.3vmax)',
        // textTransform: 'none',
      },
    },
    MuiButtonGroup: {
      root: {
        color: '#000',
      }
    },
    MuiPaper: {
      outlined: {
        backgroundColor: '#111720',
        border: '0 solid transparent',
      },
      elevation0: {
        border: '0 solid transparent',
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
    MuiAppBar: {
      root: {
        padding: '1rem 0'
      },
      colorDefault: {
        color: '#fff',
        backgroundColor: '#00000030', //darken(coreTheme?.palette?.background?.default, 0.3),
        border: '1px dashed #ffffff40',
      }
    },
    MuiSvgIcon: {
      root: {
        height: '1.5rem',
        width: '1.5rem'
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: coreTheme.palette.background.default,
        color: 'rgba(256, 256, 256, 0.87)',
        maxWidth: 220,
        fontSize: coreTheme.typography.pxToRem(12),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: coreTheme.palette.primary.main,
      },
      arrow: {
        color: coreTheme.palette.background.default,
        '&::before': {
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: coreTheme.palette.primary.main,
        },
      },
    },
    MuiListItemText: {
      root: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
  },
  // shadows: ['none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none'],
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
    // fontFamily: ['Comfortaa', 'sans-serif'].join(','),
    // h1: {
    //   fontSize: "6rem",
    //   [breakpoints.down("xs")]: {
    //     fontSize: "3rem"
    //   }
    // },
    // h2: {
    //   fontSize: "3.75rem",
    //   [breakpoints.down("xs")]: {
    //     fontSize: "2.2rem"
    //   }
    // },
    // h3: {
    //   fontSize: "3rem",
    //   [breakpoints.down("xs")]: {
    //     fontSize: "2rem"
    //   }
    // },
    // h4: {
    //   fontSize: "2.125rem",
    //   [breakpoints.down("xs")]: {
    //     fontSize: "1.8rem"
    //   }
    // }
  },
  overrides: {
    MuiButton: {
      label: {
        fontSize: 20,
        textTransform: 'none',
      },
      
    }
  }
});