import React from 'react';
import { Box } from '../framework';


export const H1 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box textStyle='h1' as='h1' {...props}>{children}</Box>
});

export const H2 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box textStyle='h2' as='h2' {...props}>{children}</Box>
});

export const H3 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box textStyle='h3' as='h3' {...props}>{children}</Box>
});

export const H5 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box textStyle='h5' as='h5' {...props}>{children}</Box>
});

