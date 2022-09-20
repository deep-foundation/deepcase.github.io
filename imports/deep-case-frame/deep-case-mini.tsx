import React from 'react';
import { motion } from "framer-motion";
import { IconContext } from 'react-icons/';
import { BsFillBrightnessHighFill } from 'react-icons/bs';


const PlayIcon = React.memo<any>(() => {
  return (<IconContext.Provider value={{ color: "#008fcc", size: '4.5rem' }}>
      <div>
        <BsFillBrightnessHighFill />
      </div>
    </IconContext.Provider>
  )
})

const variants = {
    hoverState: { borderRadius: "4.8rem", padding: '0.5rem'},
    tapState: { backgroundColor: "#ffd700" }
};

export const DeepCaseMini =  React.memo<any>(() => {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: "1.8rem",
        backgroundColor: "#0ea61",
        cursor: "pointer",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
      }}
      variants={variants}
      // animate="start"
      // whileHover="hoverState"
      // whileTap="tapState"
      // transition={{
      //   type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
      // }}
    ><PlayIcon /></motion.div>
  );
})