import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, ModalBody, ModalContent, ModalOverlay, Box } from '../imports/framework';
import { InvitationToTheCave } from './invitation-to-the-cave';
import { motion } from 'framer-motion';



const FilterOverlay = () => (
  <ModalOverlay
    bg='none'
    backdropFilter='
      blur(2px) 
      contrast(1.2)
    '
    backdropInvert='25%'
  />
)

const titleModal = {
  '&:first-letter': {
    textTransform: 'capitalize',
  },
};
const discordButton =  {
  width: '100%',
  background: '#7289da',
  borderRadius: 5,
  padding: '1rem 1.6rem',
};
const hoverSocialIcon ={
  transition: 'all 1s linear',
  transform: 'scale(1)',
  '&:hover': {
    transition: 'all 1s linear',
    transform: 'scale(1.2)',
  },
};

export const TalksForm = React.memo(({
  portalOpen = false, 
  onClosePortal
}:{
  portalOpen?: boolean; 
  onClosePortal: () => any;
}) => {
  const { t } = useTranslation();

  return (
    // <Box as={motion.div}>
    //  <InvitationToTheCave />
    // </Box>
    <Modal
      aria-modal={true}
      aria-labelledby={t('talks-form-aria-label')}
      aria-describedby={t('talks-form-aria-label')}
      isCentered
      autoFocus
      size='sm'
      blockScrollOnMount={false} 
      isOpen={portalOpen}
      onClose={onClosePortal}
    >
      <FilterOverlay />
      <ModalContent 
        border='1px solid rgb(255, 255, 251)' 
        borderRadius='none'
        bg='rgb(46, 69, 84)'
        px={0}
      >
        <ModalBody px={0}>
          <InvitationToTheCave />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
