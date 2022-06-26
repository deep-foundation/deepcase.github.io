import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, ListItem, Stack, VStack, Text, UnorderedList } from '../framework';
import { H1 } from '../headers';
import { ParticlesButton } from '../particles/particles-button';


export const IntroMobile = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Stack width='100%' spacing={0} direction='column'>
      <VStack 
        w='100%' 
        pr={2} 
        py='2em'
        bg='transparent'
        overflowX='hidden'
        textAlign='center'
      >
        <H1 
          fontSize='xl' 
          colorScheme='white' 
        >{t('intro--developer--title')}</H1>
        <UnorderedList styleType='none' ml={0} mr={0}>
          <ListItem>
            <Text fontSize='sm' colorScheme='white'>{t('intro--developer--questions')}</Text>
          </ListItem>
          <ListItem>
            <Text fontSize='sm' colorScheme='white'>{t('intro--developer--research_channel')}</Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize='sm' colorScheme='white'> 
          {t('intro--write')} <Text as='kbd'>#iamdev</Text> {t('intro--in')}
        </Text>
        <Box
          position='relative'
          bg='transparent'
          w='max-content'
          margin='0 auto'
        >
          <Box
            position='absolute'
            top={0}
            left={0}
            pt={['0.9rem', null, '0.5rem']}
            bg='transparent'
            w='100%'
          >
            <Text as='kbd'>#hi</Text> {t('intro--channel')}
          </Box>
          <ParticlesButton heightWrapBox='auto'>
            <Text as='kbd'>#hi</Text> {t('intro--channel')}
          </ParticlesButton>
        </Box>
      </VStack>
      <VStack
        w='100%' 
        pl={2} 
        py='2em'
        bg='transparent'
        overflowX='hidden'
        textAlign='center'
      >
        <H1 
          fontSize='xl' 
          colorScheme='white'
        >{t('intro--business--title')}</H1>
        <UnorderedList styleType='none' ml={0}>
          <ListItem>
            <Text fontSize='sm' colorScheme='white'>{t('intro--business--start_business')}</Text>
          </ListItem>
          <ListItem>
            <Text fontSize='sm' colorScheme='white'>{t('intro--business--need_team')}</Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize='sm' colorScheme='white'>
          {t('intro--write')} <Text as='kbd'>#iambusiness</Text> {t('intro--in')}
        </Text>
        <Box
          position='relative'
          bg='transparent'
          w='max-content'
          margin='0 auto'
        >
          <Box
            position='absolute'
            top={0}
            left={0}
            pt={['0.9rem', null, '0.5rem']}
            bg='transparent'
            w='100%'
          >
            <Text as='kbd'>#hi</Text> {t('intro--channel')}
          </Box>
          <ParticlesButton>
            <Text as='kbd'>#hi</Text> {t('intro--channel')}
          </ParticlesButton>
        </Box>
      </VStack>
    </Stack>
  )
})
