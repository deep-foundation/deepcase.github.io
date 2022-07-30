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
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0, mass: 5 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export const ULetter = React.memo(() => {
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
        d="M5.03432 5.00133C5.03432 5.00133 5.03432 13.781 5.03432 25.0205C5.03432 36.3938 14.1947 44.9468 25.157 44.9468C36.1194 44.9468 45.0037 36.3938 45.0037 25C45.0037 15.4305 45.0037 5.00133 45.0037 5.00133" 
        fill="none" 
        fillRule="evenodd" 
        opacity="1" stroke="#14024a" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="6"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  )
})


export const ILetter = React.memo(() => {
  return (
    <motion.svg 
      // height="100%" 
      width="100%"
      strokeMiterlimit="10" 
      viewBox="0 0 25 50" 
      initial="hidden"
      animate="visible"
    >
        <motion.path 
          d="M9.43443 5.07715C9.43443 3.38408 10.8069 2.01158 12.5 2.01158C14.1931 2.01158 15.5656 3.38408 15.5656 5.07715C15.5656 6.77022 14.1931 8.14273 12.5 8.14273C10.8069 8.14273 9.43443 6.77022 9.43443 5.07715Z" 
          fill="#14024a" 
          fillRule="evenodd" 
          opacity="1" 
          stroke="none"
          variants={draw}
          custom={1}
        />
        <motion.path 
          d="M12.5 13.781L12.5 44.9468" 
          fill="#14024a" 
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

export const LLetter = React.memo(() => {
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
        d="M5.03432 5.00133L5.03432 44.9468L45.0432 44.9468" 
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

export const GLetter = React.memo(() => {
  return (
    <motion.svg 
      // height="100%" 
      width="100%"
      viewBox="0 0 50 50" 
      strokeMiterlimit="10"
      initial="hidden"
      animate="visible"
    >
      <motion.path 
        d="M42.462 13.781C39.5629 10.0958 35.241 5.00133 25.157 5.00133C20.9655 5.00133 6.23085 7.90321 5.03432 25.0205C5.03432 27.4549 5.53827 35.1453 12.9958 40.9218C15.8665 43.1455 19.9342 44.9468 25.157 44.9468C29.8822 44.9468 33.5413 43.4559 36.3775 41.5605C43.7853 36.6101 45.4642 27.6343 45.0037 25.0205C29.2507 25.0205 25.157 25 25.157 25" 
        fill="none" 
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
