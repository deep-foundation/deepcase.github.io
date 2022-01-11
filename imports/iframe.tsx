import React from 'react';
import { GravityCard } from './framework';


export const IFrame = ({src}:{src: string;}) => {
  return (<GravityCard paperComponent={'div'}>
      <iframe src={src} style={{border: 'none'}} />
    </GravityCard>
  )
}