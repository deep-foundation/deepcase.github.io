import React from 'react';
import { Box } from '../framework';


export const H1 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box as='h1' fontSize='xl' sx={{ lineHeight: 1, margin: 0 }} {...props}>{children}</Box>
});

export const H2 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box as='h2' fontSize='lg' {...props}>{children}</Box>
});

export const H3 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box as='h3' {...props}>{children}</Box>
});

export const H5 = React.memo(({
  children,
  ...props
}:{
  children: any;
  [key:string]: any;
}) => {
  return <Box as='h5' {...props}>{children}</Box>
});

