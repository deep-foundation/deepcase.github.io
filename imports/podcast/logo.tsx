import React from 'react';
import { a } from 'react-spring';
import { Image } from '../framework';


const trans1 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`;

export const LogoImage = React.memo(({
  src,
  alt = '',
  top = 0,
  left= 0,
  width = 3,
  spring,
  styles,
}:{
  src: string;
  alt?: string;
  top?: number;
  left?: number;
  width?: number;
  spring?: any;
  styles?: any;
}) => {

  return(<a.div style={{ 
      width: `${width}%`,
      left: `${left}%`,
      position: 'absolute',
      top: `${top}%`, 
      transform: spring.xy.to(trans1), 
      ...styles,
    }}>
      <Image src={src} alt={alt} width='100%' height='100%' />
    </a.div>
  )
})
