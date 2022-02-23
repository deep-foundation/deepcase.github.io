import React from 'react';
import { Box, Grid } from './framework';


export const GridArea = React.memo(({
  children, 
  
  component = 'section',
  innerGridStyles,
  ...props
}:{
  children: any;
  
  component?: any;
  innerGridStyles?: any;
  [key:string]: any;
}) => {

  return (<Grid templateColumns='repeat(8, 1fr)' as={component} {...props}>
      <Box 
        sx={{
          gridColumn: '2/8',
          px: '2rem',
          '@media(max-width: 825px)': {
            gridColumn: '1/9',
            px: '1rem',
          }
        }}
        {...innerGridStyles}>
        {children}
      </Box>
    </Grid>
  )
});