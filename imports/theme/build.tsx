import { extendTheme } from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '20em',
  md: '52em',
  lg: '62em',
  xl: '80em',
  '2xl': '122.5em',
})


const temp = extendTheme({});

export const coreTheme = extendTheme({
  config: {
    cssVarPrefix: 'deep',
  },
  breakpoints,
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
    }

  },
  fonts: {
    body: "'Zen Kaku Gothic Antique', sans-serif",
    heading: "'Zen Kaku Gothic Antique', sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "calc(0.35rem + 0.5vmax)",
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
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 700,
    bold: 900,
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
        }
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
      baseStyle: {
        letterSpacing: 'wide',
        lineHeight: 'tall',
      }
    },
  }
});


export const guildTheme = extendTheme({
  config: {
    cssVarPrefix: 'deep-guild',
  },
  breakpoints,
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
        letterSpacing: 'wide',
        lineHeight: 'tall',
      }
    },
  }
});


export const theme = extendTheme({
  ...coreTheme,
});



