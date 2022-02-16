import React from 'react';
import { Grid, SimpleGrid, useMediaQuery } from './framework';


export const GridArea = React.memo(({
  children, 
  column = {sm: '1/9', xl: '2/8'},

  component = 'section',
}:{
  children: any;
  column?: any;
  
  component?: any;
}) => {
  const [max825] = useMediaQuery('(max-width: 825px)');

  return (<Grid templateColumns='repeat(8, 1fr)' as={component}>
      <SimpleGrid column={column} px={max825 ? '1rem' : '2rem'}>
        {children}
      </SimpleGrid>
    </Grid>
  )
});