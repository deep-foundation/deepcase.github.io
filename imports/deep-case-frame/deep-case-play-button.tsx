import React from 'react';
import { motion } from "framer-motion";
import { IconContext } from 'react-icons/';
import { BsFillPlayFill } from 'react-icons/bs';
import { AspectRatio } from '../framework';


const PlayIcon = React.memo<any>(() => {
  return (<IconContext.Provider value={{ color: "#008fcc", size: '4.5rem' }}>
      <div>
        <BsFillPlayFill />
      </div>
    </IconContext.Provider>
  )
})

const variants = {
    // start: { rotate: 360 },
    hoverState: { borderRadius: "4.8rem", padding: '0.5rem'},
    // tapState: { borderRadius: "1.5rem"  }
};

export const DeepCasePlayButton =  React.memo<any>(({onTapButton}:{onTapButton?: () => any;}) => {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: "1.8rem",
        backgroundColor: "#19202B",
        cursor: "pointer",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
      }}
      variants={variants}
      // animate="start"
      whileHover="hoverState"
      // whileTap="tapState"
      onTap={onTapButton}
      transition={{
        type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
      }}
    >
      <AspectRatio maxW='200px' ratio={1}>
        <iframe
          title='naruto'
          src='https://www.deep.deepcese'
          allowFullScreen
        />
      </AspectRatio>
    </motion.div>
  );
})