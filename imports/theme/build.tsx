import { colors, createMuiTheme, darken } from '@material-ui/core';


const temp = createMuiTheme({});
const { breakpoints } = temp;

var pxToRem = (size: number) => `${size/16}rem`;
var htmlFontSize = `calc(14px + (28 - 14) * ((100vw - 300px) / (2550 - 300)))`;
// var fontSize = 'calc(1em + 1vmax)';
var lineHeight = 'calc(1.1em + 0.5vmax)';

export const coreTheme = createMuiTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
    // @ts-ignore
    // fontSize: fontSize,
    // 'calc(14 + (28 - 14) * ((100 - 300) / (2550 - 300)))',
    h1: {
      fontSize: 'calc(42px + 0.3vmax)',
      fontWeight: 700,
      lineHeight: 'calc(2.725em + 0.5vmax)',
    },
    h2: {
      fontSize: 'calc(32px + 0.3vmax)',
      fontWeight: 700,
      lineHeight: 'calc(2.1em + 0.5vmax)',
    },
    h3: {
      fontSize: 'calc(28px + 0.3vmax)',
      fontWeight: 600,
      lineHeight: 'calc(1.85em + 0.5vmax)',
    },
    h4: {
      fontSize: 'calc(21px + 0.3vmax)',
      fontWeight: 500,
      lineHeight: 'calc(1.413em + 0.5vmax)',
    },
    h5: {
      fontSize: 'calc(18px + 0.3vmax)',
      fontWeight: 500,
      lineHeight: 'calc(1.225em + 0.5vmax)',
    },
    body1: {
      fontSize: 'calc(16px + 0.3vmax)',
      fontWeight: 300,
      lineHeight: 'calc(1.1em + 0.5vmax)',
    },
    body2: {
      fontSize: 'calc(14px + 0.3vmax)',
      fontWeight: 300,
      lineHeight: 'calc(0.975em + 0.5vmax)',
    },
    caption:{
      fontSize: 'calc(12px + 0.3vmax)',
      lineHeight: 'calc(0.45em + 0.5vmax)',
    },
    overline: {
      fontSize: 'calc(12px + 0.3vmax)',
      lineHeight: 'calc(0.45em + 0.5vmax)',
      // lineHeight: 0,
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
      }
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
        }
      }
    }
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