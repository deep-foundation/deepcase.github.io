import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DeepCasePlayButton } from './deep-case-play-button';
import { DeepCaseMini } from './deep-case-mini';
import { useBoolean } from '../framework';
import { DeepCaseToggler } from './deep-case-toggler';
import { useDebounce, useDebounceCallback } from '@react-hook/debounce';


export const DeepFrame = React.memo<any>(({
  blockWidth = 300,
  blockHeight = 300,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  [key:string]: any;
}) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<any>();

  const areaWidth = blockWidth * 1.25;
  const areaHeight = blockHeight * 1.25;
  const startX = areaWidth / 2;
  const startY = areaHeight / 2;
  
  const x = useSpring(startX, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  const y = useSpring(startY, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  

  const rotateX = useTransform(y, [0, areaWidth], [15, -15])
  const rotateY = useTransform(x, [0, areaHeight], [-15, 15])

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    if (current == 1) {
      x.set(startY);
      y.set(startY);
    }
  }

  function handleMouseLeave() {
    x.set(startY);
    y.set(startY);
  }

  const inViewport = useDebounceCallback(() => {
    setCurrent(0);
  }, 3000);

  return (<motion.div
      ref={ref}
      style={{
        width: 450,
        height: 450,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 450,
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => handleMouseLeave()}
      onViewportLeave={inViewport}
    >
      <DeepCaseToggler 
        current={current} 
        rotateX={rotateX} 
        rotateY={rotateY}
        width={blockWidth}
        height={blockHeight}
      >
        { current == 0
          ? <DeepCasePlayButton onTapButton={() => setCurrent(1)} />
          : <DeepCaseMini />
        }
      </DeepCaseToggler>
    </motion.div>
  )
})