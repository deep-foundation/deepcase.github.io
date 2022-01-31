import React from 'react';


export const Space = React.memo(({unit = 2}:{unit?:number}) => {
  return <div style={{width: '100%', height: `${unit}em`}} />
})