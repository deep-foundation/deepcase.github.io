import { Grid } from '@material-ui/core';
export * from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export { GitHubIcon, ArrowBackIcon };

import Link from 'next/link';
export { Link };

import useInterval from "@use-it/interval";
export { useInterval };

import { Card } from './card';
export { Card as GravityCard };

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
