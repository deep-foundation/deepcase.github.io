import React from 'react';
import { Box } from "./framework";


export const Space = React.memo(({unit = 2}:{unit?:number}) => {
  return <Box sx={{width: '100%', height: `${unit}em`}} />
});


export const AdaptiveSpace = React.memo(({unit}:{unit?:any;}) => {
  return <Box w='100%' h={unit} />
});
