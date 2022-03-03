import React from 'react';
import { Box } from '../framework';


export const FlexSection = React.memo(({children}:{children: any;}) => {
  return (<Box as='section' px={{sm: '1rem', md: '0'}} display='flex' justifyContent='center'>
      {children}
    </Box>
  )
})