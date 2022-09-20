import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DeepCasePlayButton } from './deep-case-play-button';
import { DeepCaseMini } from './deep-case-mini';
import { useBoolean } from '../framework';
import { DeepCaseToggler } from './deep-case-toggler';


export const DeepFrame = React.memo<any>(({...props}:{[key:string]: any;}) => {
  const [click, setClick] = useState(0);
  const ref = useRef<any>();
  const x = useSpring(150, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });
  const y = useSpring(150, { mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100 });

  const rotateX = useTransform(y, [0, 250], [40, -40])
  const rotateY = useTransform(x, [0, 250], [-40, 40])

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(150);
    y.set(150);
  }

  return (<motion.div
      ref={ref}
      style={{
        width: 250,
        height: 250,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: 30,
        // backgroundColor: "rgba(25, 5, 55, 0.05)",
        perspective: 400
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
     
        <DeepCaseToggler marker={click}>
          { click == 0
            ? <DeepCasePlayButton onTapButton={() => setClick(1)} />
            : <DeepCaseMini />
          }
        </DeepCaseToggler>
    </motion.div>
  )
})