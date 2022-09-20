import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion";
import React from 'react';


export const DeepCaseToggler =  React.memo<any>(({
  marker, 
  children,
  rotateX,
  rotateY,
}:{
  marker: string; 
  children: any;
  rotateX: any;
  rotateY: any;
}) => {

  const variants = {
    initial: (marker) => ({
        rotateY: marker === 1 ? -45 : 45,
        opacity: 0
    }),
    animate: { rotateY: 0, opacity: 1 },
    // exit: (marker) => ({
    //     rotateY: marker === false ? 45 : -45,
    //     opacity: 0
    // })
};

  return (<div style={{ width: 150, height: 150, position: "relative" }}>
      <AnimatePresence
        initial={false}
        custom={marker}
      >
        <motion.div
          style={{
            // position: "absolute",
            // top: 10,
            // left: 85,
            originZ: -100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
            height: 150,
            borderRadius: 30,
            backgroundColor: "#fff",
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={marker}
          custom={marker}
          transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
      </AnimatePresence>
    </div>
  );
})