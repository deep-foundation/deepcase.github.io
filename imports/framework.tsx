import { Grid } from '@material-ui/core';

export * from '@material-ui/core';

import Link from 'next/link';
export { Link };

export function ScreenCenter(props) {
  return (
    <Grid container justify="center" alignItems="center" {...props} style={{ minHeight: '100vh', minWidth: '100vw', ...props?.style }}/>
  )
};

export function Screen({ children }: { children: any; }) {
  return (
    <ScreenCenter>
      <Grid item xs={11} sm={9} md={7} lg={6}>
        {children}
      </Grid>
    </ScreenCenter>
  )
};
