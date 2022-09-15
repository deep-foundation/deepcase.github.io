import React, { useEffect, useRef } from 'react';
import { Box, Text } from '../framework';
import { H1, H2 } from '../headers';
import { IMenuItem } from './documentation-menu-item';
import { motion, useAnimation, useInView } from "framer-motion";


const animationVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.8 } }
};

export const DocumentationContent = React.memo(({title, body, children}:IMenuItem) => {
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
      {children && children.map(c => (<>
        <H2 as='header'>{c.title}</H2>
        {body && <Text fontSize='sm' as={motion.div}
          animate={controls}
          variants={animationVariants}
          style={{ transformOrigin: 'top center' }}
        >
          {c.body}
        </Text>}
      </>))}
    </Box>
  )
})