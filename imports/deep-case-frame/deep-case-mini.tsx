import { motion } from "framer-motion";
import React from 'react';
import { Box } from '../framework';


export const DeepCaseMini =  React.memo<any>(() => {
  return (<Box
      as={motion.div}
      animate={{ boxShadow: "0 0 2px 3px #6a6a6a" }}
      width='100%' height='100%'
      borderRadius="1.375rem"
     
      overflow='hidden'
    >
      <iframe
        width='100%'
        height='100%'
        title='deep case'
        src='https://deep.deep.foundation/'
        allowFullScreen
      />
    </Box>
  );
})