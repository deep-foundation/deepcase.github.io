import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Center, IconButton, Img, Modal, ModalBody, ModalContent, ModalOverlay, Text, Wrap, WrapItem } from '../imports/framework';
import { H1 } from './headers';
import { Space } from './space';


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

  return (<Modal
      aria-modal={true}
      aria-labelledby={t('talks-form-aria-label')}
      aria-describedby={t('talks-form-aria-label')}
      isCentered
      size='xl'
      blockScrollOnMount={false} 
      isOpen={portalOpen}
      onClose={onClosePortal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <H1 sx={titleModal} align='center'>{t('talks-form-write-to-us')}</H1>
          <Space unit={1} />
          <Wrap spacing='2rem' justify='center'>
            <WrapItem w='100%'>
              <Button 
                as='a' 
                size='lg' 
                href='https://discord.gg/RD8wFKtujH' 
                sx={discordButton} 
                aria-label='discord'
                variant='unstyled'
              >
                <Center>
                  <Img src='/discord.svg' alt='Discord' htmlWidth='50%' htmlHeight='100%' />
                </Center>
              </Button>
            </WrapItem>
            <WrapItem w='48px'>
              <IconButton
                isRound
                size='lg' 
                as='a' 
                target='_blank'
                href='https://www.youtube.com/channel/UCWn8rWuwZ4ISFVNTgy0GEow/featured' 
                aria-label='you tube' 
                variant='unstyled'
                icon={<Img src='/source/youtube.png' alt='YouTube' htmlWidth='100%' htmlHeight='100%' sx={hoverSocialIcon} />} />
            </WrapItem>
            <WrapItem w='48px'>
              <IconButton
                isRound
                size='lg' 
                as='a' 
                target='_blank'
                href='https://www.facebook.com/DeepFoundation-101491865581762' 
                aria-label='facebook' 
                variant='unstyled'
                icon={<Img src='/fb.png' alt='Facebook' htmlWidth='100%' htmlHeight='100%' sx={hoverSocialIcon} /> } />
            </WrapItem>
            <WrapItem w='48px'>
              <IconButton
                isRound
                size='lg' 
                as='a' 
                target='_blank'
                href='https://vk.com/deep.foundation' 
                aria-label='vkontakte' 
                variant='unstyled'
                icon={<Img src='/vk.png' alt='VKontakte' htmlWidth='100%' htmlHeight='100%' sx={hoverSocialIcon} />} />
            </WrapItem>
            <WrapItem w='48px'>
              <IconButton
                isRound
                size='lg' 
                as='a' 
                target='_blank'
                href='https://github.com/deep-foundation' 
                aria-label='git hub'
                variant='unstyled'
                icon={<Img src='/github.png' alt='GitHub' htmlWidth='100%' htmlHeight='100%' sx={hoverSocialIcon} />} />
            </WrapItem>
            <WrapItem w='48px'>
              <IconButton
                isRound
                size='lg' 
                as='a' 
                target='_blank'
                href='https://www.patreon.com/deepfoundation?fan_landing=true' 
                aria-label='patreon' 
                variant='unstyled'
                icon={<Img src='/pt.png' alt='Patreon' htmlWidth='100%' htmlHeight='100%' sx={hoverSocialIcon} />} />
            </WrapItem>
            <WrapItem w='100%'>
              <Text fontSize='sm' align='center' dangerouslySetInnerHTML={{ __html: t('talks-form-how-to-get-on-our-podcast') }} />
            </WrapItem>
          </Wrap>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})