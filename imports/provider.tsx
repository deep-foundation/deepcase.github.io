import { createMuiTheme, Link, ThemeProvider, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
// import { Heading, Text, Pre, Code, Table } from '../components';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
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
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <main {...props}/>
      </MDXProvider>
    </ThemeProvider>
  )
};
