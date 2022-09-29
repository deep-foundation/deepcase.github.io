import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion";
import React from 'react';


export const DeepCaseToggler =  React.memo<any>(({
  current, 
  children,
}:{
  current: number; 
  children: any;
}) => {

  const variants = {
    initial: { scale: 0, rotate: -280 },
    animate: { 
      scale: 1, 
      rotate: 0, 
      // borderRadius: ["1.375rem", "3.375rem", "6.375rem", "9.375rem" ] 
    },
    exit: { 
      scale: 0, 
      rotate: -280, 
      // borderRadius: ["9.375rem", "6.375rem", "3.375rem", "1.375rem"] 
    },
};

  return (<AnimatePresence
      initial={false}
      custom={current}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: "transparent",
          // overflow: 'hidden',
        }}
        variants={variants}
        initial='initial'
        animate="animate"
        exit="exit"
        transition={{
          duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 20, 
        }}
        key={current}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
})