import { extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";



const temp = extendTheme({});

export const coreTheme = extendTheme({
  config: {
    cssVarPrefix: 'deep',
  },
  colors: {
    dark: '#19202B',
    light: '#EAEAEA',
    second: {
      100: '#c0e8f9',
      500: '#00a9f3',
      600: '#008fcc',
    }, 
    menuItem: {
      100: '#19202b85',
      200: '#19202bad',
    }

  },
  fonts: {
    body: "Comfortaa, sans-serif",
    heading: "Comfortaa, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "calc(0.75rem + 0.5vmax)",
    sm: 'calc(14px + 0.5vmax)', //"0.875rem",
    md: "calc(1rem + 0.5vmax)",
    lg: "calc(1.125rem + 0.5vmax)",
    xl: "calc(1.25rem + 0.5vmax)",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        minHeight: '100%',
        bg: '#19202B',
        color: '#dfdfdf',
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        right: 0, 
        left: 0,

      }
    }
  },
  textStyles: {
    h1: {
      fontSize: 'calc(18px + 0.5vmax)',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 'calc(16px + 0.5vmax)',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 'calc(18px + 0.5vmax)',
      fontWeight: 500,
    },
  },
  shadows: {
    lg: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)',
  },
  radii: {
    md: '0.175rem',
  },
  components: {
    Button: {
      variants: {
        outline: {
          borderRadius: {
            radii: {md: '0.175rem'},
          },
        },
        ghost: {
          color: '#EAEAEA',
          _active: {
            bg: 'none',
          },
          _hover: {
            bg: 'initial',
          },
        },
        solid: {
          _focus: {
            boxShadow: 'none',
          }
        },
        unstyled: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 0',
        },
      },
      colorScheme: {
        second: '#00a9f3',
      },
      
    },

    Modal: {
      baseStyle: {
        
        dialog: {
          bg: mode('#000', "#000"),
          alignItems: 'center',
          padding: '1rem 0.5rem',
          marginLeft: '1rem',
          marginRight: '1rem',
        },
        body: {
          alignItems: 'center',
        }
      },
    },
  }
  // typography: {
  //   fontFamily: ['Comfortaa', 'sans-serif'].join(','),
  //   h1: {
  //     fontSize: 'calc(32px + 0.5vmax)',
  //     fontWeight: 700,
  //   },
  //   h2: {
  //     fontSize: 'calc(26px + 0.5vmax)',
  //     fontWeight: 700,
  //     color: '#fff',
  //   },
  //   h3: {
  //     fontSize: 'calc(24px + 0.5vmax)',
  //     fontWeight: 600,
  //   },
  //   h4: {
  //     fontSize: 'calc(22px + 0.5vmax)',
  //     fontWeight: 500,
  //   },
  //   h5: {
  //     fontSize: 'calc(18px + 0.5vmax)',
  //     fontWeight: 500,
  //   },
  //   body1: {
  //     fontSize: 'calc(16px + 0.5vmax)',
  //     fontWeight: 300,
  //     lineHeight: 'calc(1.1em + 0.5vmax)',
  //   },
  //   body2: {
  //     fontSize: 'calc(14px + 0.5vmax)',
  //     fontWeight: 300,
  //     color: '#fff',
  //     // lineHeight: 'calc(0.975em + 0.5vmax)',
  //   },
  //   caption:{
  //     fontSize: 'calc(12px + 0.3vmax)',
  //     lineHeight: 'calc(0.45em + 0.5vmax)',
  //     textTransform: 'none',
  //     color: '#fff',
  //   },
  //   overline: {
  //     fontSize: 'calc(12px + 0.5vmax)',
  //     lineHeight: 'calc(0.45em + 0.5vmax)',
  //   }
  // },
  // palette: {
  //   mode: 'dark',
  //   background: {
  //     default: '#19202B',
  //     paper: '#00000030',
  //     // @ts-ignore
  //     dark: '#111720',
  //   },
  //   primary: temp.color.lightBlue,
  //   secondary: temp.color.lightGreen,
  //   text: {
  //     primary: '#fff',
  //   }
  // },
  // shape: {
  //   borderRadius: 0,
  // },
});
export const theme = extendTheme({
  ...coreTheme,
  
  // overrides: {
  //   MuiButton: {
  //     label: {
  //       fontSize: 'calc(12px + 0.3vmax)',
  //       // textTransform: 'none',
  //     },
  //   },
  //   MuiButtonGroup: {
  //     root: {
  //       color: '#000',
  //     }
  //   },
  //   MuiPaper: {
  //     outlined: {
  //       backgroundColor: '#111720',
  //       border: '0 solid transparent',
  //     },
  //     elevation0: {
  //       border: '0 solid transparent',
  //       backgroundColor: 'transparent',
  //     },
  //     elevation1: {
  //       border: '1px dashed #ffffff40',
  //     },
  //     elevation2: {
  //       border: '1px dashed #ffffff60',
  //     },
  //     elevation3: {
  //       border: '1px dashed #ffffff80',
  //     },
  //     elevation4: {
  //       border: '1px dashed #ffffff100',
  //     },
  //   },
  //   MuiAppBar: {
  //     root: {
  //       padding: '1rem 0'
  //     },
  //     colorDefault: {
  //       color: '#fff',
  //       backgroundColor: '#00000030', //darken(coreTheme?.palette?.background?.default, 0.3),
  //       border: '1px dashed #ffffff40',
  //     }
  //   },
  //   MuiSvgIcon: {
  //     root: {
  //       height: '1.5rem',
  //       width: '1.5rem'
  //     },
  //   },
  //   MuiTooltip: {
  //     tooltip: {
  //       backgroundColor: coreTheme.palette.background.default,
  //       color: 'rgba(256, 256, 256, 0.87)',
  //       maxWidth: 220,
  //       fontSize: coreTheme.typography.pxToRem(12),
  //       borderWidth: 1,
  //       borderStyle: 'solid',
  //       borderColor: coreTheme.palette.primary.main,
  //     },
  //     arrow: {
  //       color: coreTheme.palette.background.default,
  //       '&::before': {
  //         borderWidth: 1,
  //         borderStyle: 'solid',
  //         borderColor: coreTheme.palette.primary.main,
  //       },
  //     },
  //   },
  //   MuiListItemText: {
  //     root: {
  //       marginTop: 0,
  //       marginBottom: 0,
  //     },
  //   },
  // },
  // shadows: ['none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none'],
});

export const theme2 = extendTheme({
  // palette: {
  //   primary: {
  //     main: '#000',
  //     light: '#000',
  //     dark: '#000',
  //   },
  // },
  // typography: {
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
  // },
  // overrides: {
  //   MuiButton: {
  //     label: {
  //       fontSize: 20,
  //       textTransform: 'none',
  //     },
      
  //   }
  // }
});