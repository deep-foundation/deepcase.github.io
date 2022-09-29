import { motion } from "framer-motion";
import React from 'react';
import { Box } from '../framework';


const variants = {
    start: { borderRadius: "1.8rem", },
    hoverState: { borderRadius: "50%" },
    end: { borderRadius: "1.8rem" }
};

export const DeepCaseMini =  React.memo<any>(() => {
  return (
    // <motion.div
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: "#0ea61",
    //     cursor: "pointer",
    //     display: "flex",
    //     placeItems: "center",
    //     placeContent: "center",
    //   }}
    // >
      <Box w='100%' h='100%'>
        <iframe
          width='100%'
          height='100%'
          title='deep case'
          src='https://deep.deep.foundation/'
          allowFullScreen
        />
      </Box>
    // </motion.div>
  );
})