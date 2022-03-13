import React from 'react';
import { Box } from '../framework';


export const FlexSection = React.memo(({children, ...props}:{children: any; [props: string]: any;}) => {
  return (<Box as='section' px={{sm: '1rem', md: '0'}} display='flex' justifyContent='center' {...props}>
      {children}
    </Box>
  )
})