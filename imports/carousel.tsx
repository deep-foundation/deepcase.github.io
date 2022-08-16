import React from 'react';

import { Box } from './framework';
import { ThesisDescription } from './theses';

export const Carousel = React.memo<any>(({
  items, 
  styles,
  index,
}:{
  items: {
    text: string,
    points: {
      id: number;
      text: string;
    }[]
  }[]; 
  index: number;
  [key:string]: any;
}) => {
  const leftSize = index;
  const rightSize = items.length - (index + 1);
  const diff = Math.abs(leftSize - rightSize);
  
  const lastRightIndex = (items.length - 1) - (diff / 2);
  const lastLeftIndex = (diff / 2);

  return(items.map((item, _i) => {
      const i = rightSize < leftSize && _i < lastLeftIndex
      ? (items.length) + _i :
      rightSize > leftSize && _i > lastRightIndex
      ? _i - lastRightIndex - lastLeftIndex - 1 :
      _i;
      return (
        <Box key={_i}
          id={`${i}`}
          display='flex'
          alignItems='center'
          position='absolute'
          height='max-content'
          // height='100%'
          width='calc(100% - 4rem)'
          transition='all 1s ease'
          sx={{
            ...((
              index === i
            ) ? ({
              pointerEvents: 'all',
            }) : ({
              pointerEvents: 'none',
            })),
            ...styles
          }}
        >
          <ThesisDescription item={item} index={index} i={i}/>
        </Box> 
      )
    })
  )
})



