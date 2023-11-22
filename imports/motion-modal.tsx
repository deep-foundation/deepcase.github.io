import { Variants, motion, useAnimation } from 'framer-motion';
import { forwardRef, memo, useEffect, useRef } from 'react';
import { Box, Center, Portal, useOutsideClick } from './framework';


const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 2
}

const invitationForm: Variants = {
  active: {
    scale: 1,
    opacity: 1,
    display: 'block',
    transition: spring 
  },
  inactive: {
    scale: 0,
    opacity: 0,
    display: 'none',
    transition: spring 
  }
}

const backdrop: Variants = {
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

export const MotionModal = memo(forwardRef<any, {
  portalOpen?: boolean; 
  onClosePortal: () => any;
  children: any;
}>(({
  portalOpen = true, 
  onClosePortal,
  children,
}, ref) => {

  const control = useAnimation();
  
  useOutsideClick({
    ref: ref as React.RefObject<any>,
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
        {portalOpen && <Box 
          as={motion.div} 
          animate={control} 
          variants={invitationForm} 
          w='100%'
          h='100%'
          ref={ref}
        >
          {children}
        </Box>}
      </Center>
    </Portal>
  )
}));
