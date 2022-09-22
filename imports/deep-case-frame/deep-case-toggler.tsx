import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion";
import React from 'react';


export const DeepCaseToggler =  React.memo<any>(({
  current, 
  children,
  rotateX,
  rotateY,
  width = 300, 
  height = 300,
  parentProps,
}:{
  current: number; 
  children: any;
  rotateX: any;
  rotateY: any;
  width?: number;
  height?: number;
  parentProps?: any;
}) => {

  const variants = {
    initial: { scale: 0, rotate: -280 },
    animate: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: -280 },
};

  return (<motion.div 
      style={{ 
        width: width, 
        height: height, 
        borderRadius: 30,
        position: "relative",
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      {...parentProps}
    >
      <AnimatePresence
        initial={false}
        custom={current}
      >
        <motion.div
          style={{

            position: "absolute",
            top: 0, left: 0,
            width: width,
            height: height,
            borderRadius: 30,
            backgroundColor: "transparent",
            overflow: 'hidden',
            // rotateX: rotateX,
            // rotateY: rotateY,
          }}
          variants={variants}
          initial='initial'
          animate="animate"
          exit="exit"
          transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
          }}
          key={current}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
})