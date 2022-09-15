import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Portal, useOutsideClick } from '../imports/framework';


const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 2
}

const backdrop = {
  active: {
    scale: 1,
    opacity: 1,
    transition: spring 
  },
  inactive: {
    scale: 0,
    opacity: 0,
    transition: spring 
  }
}

export const Backdrop = React.memo<any>(({
  portalOpen = true, 
  onClosePortal,
  children,
}:{
  portalOpen?: boolean; 
  onClosePortal: () => any;
  children: any;
}) => {
  const { t } = useTranslation();
  const control = useAnimation();
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: onClosePortal,
  })

  useEffect(() => {
    if (portalOpen === true) {
      control.start("active"); 
    } else {
      control.start("inactive");
    }
  }, [control, portalOpen]);

  return (
    <Portal>
      <Center 
        as={motion.div}
        animate={control}
        variants={backdrop}
        width='100vw' 
        height='100vh'
        position='fixed'
        top={0}
        left={0}
        zIndex={3}
        backdropFilter='
          blur(2px) 
          contrast(1.2)
        '
        backdropInvert='25%'
        onClick={onClosePortal}
      >
       {children}
      </Center>
    </Portal>
    )
  })