import { Grid, Button } from '@material-ui/core';
export * from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export { GitHubIcon, ArrowBackIcon, AddIcon };

import Link from 'next/link';
export { Link };

import useInterval from "@use-it/interval";
export { useInterval };

import { Card } from './card';
export { Card as GravityCard };

import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import { useState } from 'react';
export { default as ConfettiExplosion } from '@reonomy/react-confetti-explosion';

export function ScreenCenter(props) {
  return (
    <Grid container justify="center" alignItems="center" {...props} style={{ minHeight: '100vh', minWidth: '100vw', ...props?.style }}/>
  )
};

export function Screen({ children, ContainerProps, ItemProps }: { children: any; ContainerProps?: any; ItemProps?: any; }) {
  return (
    <ScreenCenter {...ContainerProps}>
      <Grid item xs={11} sm={9} md={7} lg={6} {...ItemProps}>
        {children}
      </Grid>
    </ScreenCenter>
  )
};

export function ButtonExplotion(props: any) {
  const [exp, setExp] = useState(false);
  return <>
    <Button {...props} onClick={(e) => {
      setExp(true);
      setTimeout(() => setExp(false), 1000);
      props?.onClick && props?.onClick(e);
    }} style={{ position: 'relative' }}>
      {!!exp && <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}><ConfettiExplosion {...{
        force: 0.4,
        duration: 2000,
        particleCount: 30,
        floorHeight: 500,
        floorWidth: 300,
        colors: ['#000'],
      }}/></div>}
      {props?.children}
    </Button>
  </>;
}
