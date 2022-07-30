import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};


export const DLetter = React.memo(() => {
  return (
    <motion.svg 
      // height="100%" 
      width="100%"
      strokeMiterlimit="10" 
      viewBox="0 0 50 50" 
      initial="hidden"
      animate="visible"
    >      
      <motion.path 
        d="M5.03432 5.00133C5.03432 5.00133 19.7996 5.09044 25 5.09044C35.9957 5.09044 44.9096 14.0043 44.9096 25C44.9096 35.9957 35.9957 44.9096 25 44.9096C20.0725 44.9096 5.03432 44.9468 5.03432 44.9468" 
        fill="none" 
        fillRule="evenodd" 
        opacity="1" 
        stroke="#14024a" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="6"
        variants={draw}
        custom={1}
      />
      <motion.path 
        d="M5.03432 5.00133L5.03432 44.9468" 
        fill="none" 
        fillRule="evenodd" 
        opacity="1" 
        stroke="#14024a" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="6"
        variants={draw}
        custom={1}
      />
    </motion.svg>
    
  )
})


export const ELetter = React.memo(() => {
  return (
      <motion.svg 
        // height="100%" 
        width="max-content"
        strokeMiterlimit="10" 
        viewBox="0 0 50 50" 
        initial="hidden"
        animate="visible"
      >
        <motion.path 
          d="M41.2893 36.3938C40.5941 37.4328 35.241 44.9468 25.157 44.9468C20.9655 44.9468 6.23085 42.1173 5.03432 25C5.03432 22.5656 5.53827 14.8029 12.9958 9.02631C15.8665 6.80271 19.9342 5.00133 25.157 5.00133C29.8822 5.00133 33.5413 6.49224 36.3775 8.38762C43.7853 13.3381 45.4642 22.4067 45.0037 25.0205C29.2507 25.0205 5.03432 25.0205 5.03432 25.0205" 
          fill="none" 
          fillRule="evenodd" 
          opacity="1" 
          stroke="#14024a" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="6"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    
  )
})


export const PLetter = React.memo(() => {
  return (
      <motion.svg 
        // height="100%" 
        width="max-content"
        strokeMiterlimit="10" 
        viewBox="0 0 50 50" 
        initial="hidden"
        animate="visible"
      >
        <motion.path 
          d="M5.03432 5.00133C5.03432 5.00133 20.7363 5.00133 29.3321 5.00133C37.9873 5.00133 45.0037 12.0177 45.0037 20.6729C45.0037 29.3281 37.9873 36.3445 29.3321 36.3445C20.7302 36.3445 5.03432 36.3938 5.03432 36.3938" 
          fill="none" 
          fillRule="evenodd" 
          opacity="1" 
          stroke="#14024a" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="6"
          variants={draw}
          custom={1}
        />
        <motion.path 
          d="M5.03432 5.00133L5.03432 44.9468" 
          fill="none" 
          fillRule="evenodd" 
          opacity="1" 
          stroke="#14024a" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="6"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    
  )
})