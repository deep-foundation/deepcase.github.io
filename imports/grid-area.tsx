import React from 'react';
import { Box, Grid } from './framework';


export const GridArea = React.memo(({
  children, 
  repeat = 8,
  columnsZone = '2/8',
  mediaColumnsZone = '1/9',
  component = 'section',
  innerGridStyles,
  ...props
}:{
  children: any;
  repeat?: number;
  columnsZone?: string;
  mediaColumnsZone?: string;
  component?: any;
  innerGridStyles?: any;
  [key:string]: any;
}) => {

  return (<Grid templateColumns={`repeat(${repeat}, 1fr)`} as={component} {...props}>
      <Box 
        sx={{
          gridColumn: columnsZone,
          px: '2rem',
          '@media(max-width: 825px)': {
            gridColumn: mediaColumnsZone,
            px: '1rem',
          }
        }}
        {...innerGridStyles}>
        {children}
      </Box>
    </Grid>
  )
});