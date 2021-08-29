import { createMuiTheme, Link, ThemeProvider, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { Analitics } from './analitics';
// import { Heading, Text, Pre, Code, Table } from '../components';

const temp = createMuiTheme({});
const { breakpoints, typography: { pxToRem } } = temp;

const theme = createMuiTheme({
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

const components = {
  h1: p => <Typography {...p} variant="h1"/>,
  h2: p => <Typography {...p} variant="h2"/>,
  h3: p => <Typography {...p} variant="h3"/>,
  h4: p => <Typography {...p} variant="h4"/>,
  h5: p => <Typography {...p} variant="h5"/>,
  h6: p => <Typography {...p} variant="h6"/>,
  p: Typography,
  ul: p => <List disablePadding {...p}/>,
  li: p => <ListItem><ListItemText>{p.children}</ListItemText></ListItem>,
  link: Link,
}

export function Provider(props) {
  return (
    <Analitics
      yandexMetrikaAccounts={[84258358]}
      googleAnalyticsAccounts={['G-3WH4B0WR4L']}
    >
      <ThemeProvider theme={theme}>
        {/* <MDXProvider components={components}> */}
          {/* <main {...props}/> */}
        {/* </MDXProvider> */}
        {props.children}
      </ThemeProvider>
    </Analitics>
  )
};
