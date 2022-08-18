import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, ModalBody, ModalContent, ModalOverlay, Box, Portal, Center, useOutsideClick } from '../imports/framework';
import { InvitationToTheCave } from './invitation-to-the-cave';
import { motion, useAnimation } from 'framer-motion';


const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 2
}

const invitationForm = {
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

export const TalksFormCust = React.memo<any>(({
  portalOpen1 = false, 
  onClosePortal1
}:{
  portalOpen1?: boolean; 
  onClosePortal1: () => any;
}) => {
  const { t } = useTranslation();
  const control = useAnimation();
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: onClosePortal1,
  })

  useEffect(() => {
    if (portalOpen1 === true) {
      control.start("active"); 
    } else {
      control.start("inactive");
    }
  }, [control, portalOpen1]);

  console.log(portalOpen1);

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
        onClick={onClosePortal1}
      >
        {portalOpen1 && <Box 
          as={motion.div} 
          animate={control} 
          variants={invitationForm} 
          maxW='md'
          minW='sm'
          // width='calc(18rem + 0.5vmax)' 
          height='max-content'  
          border='1px solid rgb(255, 255, 251)'
          bg='rgb(46, 69, 84)'
          py={6}
          px={4}
          ref={ref}
        >
        <InvitationToTheCave />
        </Box>}
      </Center>
    </Portal>
    )
  })