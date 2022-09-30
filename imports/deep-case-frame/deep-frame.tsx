import { useDebounceCallback } from '@react-hook/debounce';
import { motion, useAnimation, useInView, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { DeepCaseMini } from './deep-case-mini';
import { DeepCasePlayButton } from './deep-case-play-button';
import { DeepCaseToggler } from './deep-case-toggler';


export const DeepFrame = React.memo<any>(({
  blockWidth = 300,
  blockHeight = 300,
  onTapButton,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  onTapButton?: () => any;
  [key:string]: any;
}) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<any>();
  const viewRef = useRef<any>();
  const controls = useAnimation();
  
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
  
  const variants = {
    start: { opacity: [0, 0.5, 1], scale: [0.3, 0.65, 1], borderRadius: "1.375rem" },
    hoverState: { borderRadius: current == 0 ? "9.375rem" : '1.375rem' },
    tapState: { scale: "1.1", borderRadius: '1.375rem'  },
  };

  const inViewport = useDebounceCallback(() => {
    setCurrent(0);
  }, 2000);
  
  const isInView = useInView(viewRef);

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
        <motion.div ref={viewRef}
          style={{
            width: blockWidth,
            height: blockHeight,
            rotateX: rotateX,
            rotateY: rotateY,
            position: 'relative',
            borderRadius: '1.375rem',
            overflow: 'hidden',
          }}
          variants={isInView && variants}
          animate="start"
          whileHover="hoverState"
          whileTap="tapState"
          onTap={() => setCurrent(1)}
          transition={{
            type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
          }}
        >
        <DeepCaseToggler 
          current={current} 
        >
          { current == 0
            ? <DeepCasePlayButton />
            : <DeepCaseMini />
          }
        </DeepCaseToggler>
      </motion.div>
    </motion.div>
  )
})