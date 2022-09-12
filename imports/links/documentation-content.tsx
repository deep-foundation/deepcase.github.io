import React, { useEffect, useRef } from 'react';
import { Box, Text } from '../framework';
import { H1 } from '../headers';
import { IMenuItem } from './documentation-menu';
import { motion, useAnimation, useInView } from "framer-motion";


const animationVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.8 } }
};

export const DocumentationContent = React.memo(({title, body}:IMenuItem) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (<Box as='article' ref={ref}>
      <H1 as='header'>{title}</H1>
      {body && <Text fontSize='sm' as={motion.div}
          animate={controls}
          variants={animationVariants}
          style={{ transformOrigin: 'top center' }}
        >
          {body}
        </Text>
      }
    </Box>
  )
})