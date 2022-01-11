import React from 'react';


export const Space = ({unit = 2}:{unit?:number}) => {
  return <div style={{width: '100%', height: `${unit}em`}} />
}