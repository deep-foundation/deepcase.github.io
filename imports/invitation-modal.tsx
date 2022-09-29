import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, ModalBody, ModalContent, ModalOverlay, Box, Portal, Center, useOutsideClick } from '../imports/framework';
import { InvitationToTheCave } from './invitation-to-the-cave';
import { motion, useAnimation } from 'framer-motion';
import { Blob } from './form-blob';


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
  portalOpen = true, 
  onClosePortal
}:{
  portalOpen?: boolean; 
  onClosePortal: () => any;
}) => {
  const { t } = useTranslation();
  const [ contentReplacement, setContentReplacement ] = useState(false);
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
        {portalOpen && <Box 
          as={motion.div} 
          animate={control} 
          variants={invitationForm} 
          w='100%'
          h='100%'
          ref={ref}
        >
          <Blob contentReplacement={contentReplacement}>
            <InvitationToTheCave
              display="flex"
              alignItems="center"
              contentReplacement={contentReplacement}
              setContentReplacement={() => setContentReplacement(!contentReplacement)}
              onSubmit={() => setContentReplacement(false)}
            />
          </Blob>
        </Box>}
      </Center>
    </Portal>
    )
  })