import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";

const temp = extendTheme({});

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  cssVarPrefix: 'deep-foundation',
}

export const coreTheme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      'body': {
        color: mode('graphite.900', 'white')(props),
      },
    }),
  },
  semanticTokens: {
    colors: {
      error: 'red.500',
      text: {
        default: 'graphite.900',
        _dark: 'white',
      },
      bodyBg: {
        default: 'gray.100',
        _dark: 'cyDark',
      },
      gridColor: {
        default: '#0000000d',
        _dark: '#ffffff14',
      },
      flagBackground: {
        default: 'white',
        _dark: 'darkBg',
      },
      colorModeButton: {
        default: 'blue.900',
        _dark: 'blue.50',
      },
      switchModeBorder: {
        default: 'blue.500',
        _dark: 'blue.200',
      },
      boxShadowMode: {
        default: '0 0px 5px 2px #0000001a',
        _dark: '0 0px 5px 2px  #00000026',
      },
      podcastBg: {
        default: '#D9D9D9',
        _dark: '#004D74',
      },
      chronicleBgGraphiteWhite: {
        default: 'graphite.900',
        _dark: 'white',
      },
      chronicleBgGoldBlue: {
        default: 'gold.100',
        _dark: 'blue.400',
      },
      chronicleBgLightGraphiteDarkBlue: {
        default: 'graphite.200',
        _dark: 'blue.900',
      },
      chronicleTextTitleGoldBlue: {
        default: 'gold.800',
        _dark: 'blue.200',
      },
      chronicleTextGraphiteWhite: {
        default: 'graphite.900',
        _dark: 'white',
      },
      chronicleTextWhiteGraphite: {
        default: 'white',
        _dark: 'graphite.900',
      },
      chronicleTextSubtitleGoldBlue: {
        default: 'gold.900',
        _dark: 'blue.300',
      },
    },
  },
  breakpoints: {
    sm: '20em',
    md: '52em',
    lg: '62em',
    xl: '80em',
    '2xl': '122.5em',
  },
  colors: {
    primary: '#008fcc',
    dark: '#19202B',
    transparentDark: {
      500: 'rgba(0, 0, 0, 0.19)',
    },
    light: '#EAEAEA',
    second: {
      100: '#c0e8f9',
      500: '#008fcc',
      600: '#00a9f3',
    }, 
    menuItem: {
      100: '#19202b85',
      200: '#19202bad',
    },

    darkBg: '#222222',
    cyDark: '#141214',
    blue: {
      100: '',
      200: '#36B4FF',
      300: '#464CA0',
      400: '#2F3365',
      900: '#19202B',
    },
    graphite: {
      100: '#F2F2F2',
      200: '#9A9A9A',
      900: '#4F4F4F',
    },
    gold: {
      100: '#FFE1A8',
      200: '#FFB600',
      800: '#EEAD13',
      900: '#ff9800'
    },
    grayText: '#3a3a3a',
    white: '#ebf8ff',
    gray: {
      10: '#eeeeee',
      900: '#111720',
    },
    cyan: {
      400: '#0080ff',
    },
  },
  space: {
    4.5: '1.125rem',
  },
  
  fonts: {
    body: "'Zen Kaku Gothic Antique', sans-serif",
    heading: "'Zen Kaku Gothic Antique', sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    '3xs': "calc(0.2rem + 0.6vmax)",
    '2xs': "calc(0.5rem + 0.5vmax)",
    xs: "calc(0.75rem + 0.5vmax)",
    sm: 'calc(0.95rem + 0.5vmax)', //"0.875rem",
    md: "calc(1rem + 0.5vmax)",
    lg: "calc(1.5rem + 0.5vmax)",
    xl: "calc(1.35rem + 0.8vmax)",
    "2xl": "calc(1.5rem + 0.5vmax)",
    "3xl": "calc(1.875rem + 0.5vmax)",
    "4xl": "calc(2.3rem + 0.5vmax)",
    "5xl": "calc(3rem + 0.5vmax)",
    "6xl": "calc(3.25rem + 0.5vmax)",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 700,
    bold: 900,
  },
  textStyles: {
    h1: {
      fontSize: 'calc(20px + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
    h2: {
      fontSize: 'calc(18px + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
    h5: {
      fontSize: 'calc(14px + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
    Bold28: {
      fontSize: 'md',
      fontWeight: 'bold',
      letterSpacing: 'normal',
      lineHeight: 'shorter',
      // color: 'text',
    },
    Bold16: {
      fontSize: '2xs',
      lineHeight: 1.2,
      fontWeight: 'bold',
      // color: 'text',
    },
    Bold14: {
      fontSize: '3xs',
      lineHeight: 1.2,
      fontWeight: 'bold',
      // color: 'text',
    },
    Medium36: {
      fontSize: 'xl',
      lineHeight: 1.2,
      fontWeight: 'medium',
      // color: 'text',
    },
    Medium32: {
      fontSize: 'lg',
      lineHeight: 1.2,
      fontWeight: 'medium',
      // color: 'text',
    },
    Medium28: {
      fontSize: 'md',
      lineHeight: 1.2,
      fontWeight: 'medium',
      // color: 'text',
    },
    Medium22: {
      fontSize: 'sm',
      lineHeight: 1.2,
      fontWeight: 'medium',
      // color: 'text',
    },
    Medium20: {
      fontSize: 'xs',
      lineHeight: 1.2,
      fontWeight: 'medium',
      // color: 'text',
    },
    Medium16: {
      fontSize: '2xs',
      lineHeight: 'shorter',
      fontWeight: 'medium',
      // color: 'text',
    },
    Medium14: {
      fontSize: '3xs',
      lineHeight: 1.2,
      fontWeight: 'medium',
      // color: 'text',
    },
    Regular30: {
      fontSize: 'lg',
      lineHeight: 1.2,
      fontWeight: 'regular',
      // color: 'text',
    },
    Regular28: {
      fontSize: 'md',
      lineHeight: 1.2,
      fontWeight: 'regular',
      // color: 'text',
    },
    Regular20: {
      fontSize: 'xs',
      lineHeight: 1.5,
      fontWeight: 'regular',
      // color: 'text',
    },
    Regular16: {
      fontSize: '2xs',
      lineHeight: 1.5,
      fontWeight: 'regular',
      // color: 'text',
    },
    Regular14: {
      fontSize: '3xs',
      lineHeight: 'shorter',
      fontWeight: 'regular',
      // color: 'text',
    },
    body: {
      fontSize: 'xs',
      lineHeight: 1.5,
      fontWeight: 'regular',
      // color: 'text',
    },
  },
  shadows: {
    lg: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)',
    base: '0 1px 3px 0 rgba(143,143,143, 0.1),0 1px 2px 0 rgba(143,143,143, 0.06)',
  },
  radii: {
    md: '0.175rem',
  },
  components: {
    Button: {
      baseStyle: {
        lineHeight: 'base',
        fontWeight: 'light',
      },
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
          _focus: {
            boxShadow: 'none',
          },
        },
        solid: {
          _focus: {
            boxShadow: 'none',
          },
          
        },
        unstyled: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem 0',
        },
        link: {
          '&:focus': {
            boxShadow: '0 0 0',
          },
        },
        text: {
          '&:focus': {
            boxShadow: '0 0 0',
          },
        },
      },
      colorScheme: {
        second: '#00a9f3',
      },
      
    },

    IconButton: {
      _focus: {
        boxShadow: '0 0 0',
      },
    },

    Link: {
      baseStyle: {
        lineHeight: 'base',
        fontWeight: 'light',
        _focus: {
          boxShadow: 'none',
        },
        textDecoration: 'none',
      },
      sizes: {
        sm: {
          h: '2rem',
          fontSize: 'sm',
          px: '0.75rem',
        },
        md: {
          h: '2.5rem',
          fontSize: 'md',
          px: '1rem',
        },
      },
    },

    Modal: {
      baseStyle: {
        
        
        dialog: {
          bg: 'dark',
          boxShadow: 'base',
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
    Text: {
      // baseStyle: {
      //   letterSpacing: 'wide',
      //   lineHeight: 'tall',
      // }
    },
  }
});


export const guildTheme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      'body': {
        color: mode('gray.900', 'whiteAlpha.900')(props),
        // bg: mode('gray.100', 'cyDark')(props),
        // position: 'absolute', 
        // top: 0, 
        // bottom: 0, 
        // right: 0, 
        // left: 0,
      },
    }),
  },
  breakpoints: {
    sm: '20em',
    md: '52em',
    lg: '62em',
    xl: '80em',
    '2xl': '122.5em',
  },
  colors: {
    dark: '#19202B',
    transparentDark: {
      500: 'rgba(0, 0, 0, 0.19)',
    },
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
    body: "'Zen Kaku Gothic Antique', sans-serif",
    heading: "'Zen Kaku Gothic Antique', sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 700,
    bold: 900,
  },
  fontSizes: {
    xs: "calc(0.35rem + 0.5vmax)",
    sm: 'calc(0.875rem + 0.5vmax)',
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
  textStyles: {
    h1: {
      fontSize: 'calc(1.25rem + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
    h2: {
      fontSize: 'calc(1.125rem + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
    h5: {
      fontSize: 'calc(0.875rem + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
  },
  shadows: {
    lg: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)',
    base: '0 1px 3px 0 rgba(143,143,143, 0.1),0 1px 2px 0 rgba(143,143,143, 0.06)',
  },
  radii: {
    md: '0.175rem',
  },
  components: {
    Button: {
      baseStyle: {
        lineHeight: 'base',
        fontWeight: 'light',
      },
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

    Link: {
      baseStyle: {
        lineHeight: 'base',
        fontWeight: 'light',
      },
      sizes: {
        sm: {
          h: '2rem',
          fontSize: 'sm',
          px: '0.75rem',
        },
        md: {
          h: '2.5rem',
          fontSize: 'md',
          px: '1rem',
        },
      },
    },

    Modal: {
      baseStyle: {
        
        
        dialog: {
          bg: 'dark',
          boxShadow: 'base',
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
    Text: {
      baseStyle: {
        // letterSpacing: 'wide',
        // lineHeight: 'tall',
        // color: 'text',
      }
    },
  }
});

export const linksTheme = extendTheme({
  config: {
    cssVarPrefix: 'deep-links',
  },
  breakpoints: {
    sm: '20em',
    md: '52em',
    lg: '62em',
    xl: '80em',
    '2xl': '122.5em',
  },
  colors: {
    dark: '#19202B',
    transparentDark: {
      500: 'rgba(0, 0, 0, 0.19)',
    },
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
    body: "'Zen Kaku Gothic Antique', sans-serif",
    heading: "'Zen Kaku Gothic Antique', sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "calc(0.35rem + 0.5vmax)",
    sm: 'calc(0.875rem + 0.5vmax)',
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
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 700,
  },
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        minHeight: '100%',
        bg: 'light',
        color: 'dark',
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
      fontSize: 'calc(1.25rem + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
    h2: {
      fontSize: 'calc(1.125rem + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
    h5: {
      fontSize: 'calc(0.875rem + 0.5vmax)',
      fontWeight: 'light',
      letterSpacing: 'wide',
    },
  },
  shadows: {
    lg: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)',
    base: '0 1px 3px 0 rgba(143,143,143, 0.1),0 1px 2px 0 rgba(143,143,143, 0.06)',
  },
  radii: {
    md: '0.175rem',
  },
  components: {
    Button: {
      baseStyle: {
        lineHeight: 'base',
        fontWeight: 'light',
      },
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
            boxShadow: 'none',
          },
          _focus: {
            boxShadow: 'none',
          },
          _hover: {
            bg: 'initial',
            boxShadow: 'none',
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

    Link: {
      baseStyle: {
        lineHeight: 'base',
        fontWeight: 'light',
      },
      sizes: {
        sm: {
          h: '2rem',
          fontSize: 'sm',
          px: '0.75rem',
        },
        md: {
          h: '2.5rem',
          fontSize: 'md',
          px: '1rem',
        },
      },
    },

    Modal: {
      baseStyle: {
        
        
        dialog: {
          bg: 'dark',
          boxShadow: 'base',
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
    Text: {
      baseStyle: {
        letterSpacing: 'wide',
        lineHeight: 'tall',
      }
    },
  }
});


export const theme = extendTheme({
  ...coreTheme,
});



