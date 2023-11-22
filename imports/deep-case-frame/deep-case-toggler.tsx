import { AnimatePresence, Variants, motion } from "framer-motion";
import { memo } from 'react';


export const DeepCaseToggler =  memo(({
  current, 
  children,
}:{
  current: number; 
  children: any;
}) => {

  const variants: Variants = {
    initial: { 
      opacity: 1, scale: 1, borderRadius: "1.375rem"
    },
    animate: { 
      opacity: [0, 1], scale: [0.3, 1], borderRadius: "1.375rem",
      transition: { delay: 0.5 }
    },
    exit: { 
      opacity: [1, 0], scale: [1, 0.3], 
      borderRadius: "1.375rem",
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
          borderRadius: "1.375rem",
        }}
        variants={variants}
        initial='initial'
        animate="animate"
        exit="exit"
        transition={{
            duration: 1,
            type: "spring",
            // stiffness: 100,
            // damping: 20, 
            mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
        }}
        key={current}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
})