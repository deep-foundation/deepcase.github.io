import { motion } from "framer-motion";
import React from 'react';
import { IconContext } from 'react-icons/';
import { BsFillPlayFill } from 'react-icons/bs';
import { Box } from '../framework';


const PlayIcon = React.memo<any>(() => {
  return (<IconContext.Provider value={{ color: "#008fcc", size: '4.5rem' }}>
      <div>
        <BsFillPlayFill />
      </div>
    </IconContext.Provider>
  )
})

const variants = {
    start: { rotate: 360, borderRadius: '50%', },
    hoverState: { borderRadius: "50%"  },
    tapState: { scale: "1.1"  }
};

export const DeepCasePlayButton =  React.memo<any>(({onTapButton}:{onTapButton?: () => any;}) => {

  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: "#19202B",
        cursor: "pointer",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: "1.8rem"
      }}
      // variants={variants}
      // animate={isInView && "start"}
      // whileHover="hoverState"
      // whileTap="tapState"
      // onTap={onTapButton}
      // transition={{
      //   type: "spring", mass: 0.5, bounce: 0.25, stiffness: 180, damping: 100
      // }}
    >
      <PlayIcon />
    </Box>
  );
})