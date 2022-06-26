import React from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Box, UnorderedList, ListItem, Grid, GridItem, Text, Button } from '../framework';
import { H1 } from '../headers';
import { ParticlesButton } from '../particles/particles-button';


export const IntroDesktop = React.memo(() => {
  const { t } = useTranslation();
  return (<Box
      width='100%'
      display='grid'
      gridTemplateRows='repeat(6, 0.1fr)'
      gridTemplateColumns='repeat(4, 1fr)'
      rowGap={3}
      columnGap={10}
    >
      <Box gridColumn='1/3'>
        <H1 fontSize={{sm: 'xl', md: '5xl'}} colorScheme='white' textAlign={{sm: 'left', md: 'right'}}>{t('intro--developer--title')}</H1>
      </Box>
      <Box gridColumn='3/5'>
        <H1 fontSize={{sm: 'xl', md: '5xl'}} colorScheme='white'>{t('intro--business--title')}</H1>
      </Box>
      <Box gridColumn='1/3'>
        <UnorderedList styleType='none' textAlign={{sm: 'left', md: 'right'}} ml={0} mr={0} >
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--developer--questions')}</Text>
          </ListItem>
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--developer--research_channel')}</Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box gridColumn='3/5'>
        <UnorderedList styleType='none' ml={0}>
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--business--start_business')}</Text>
          </ListItem>
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--business--need_team')}</Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box gridColumn='2/4' alignSelf='center' justifySelf='center'>
        <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white' align={{sm: 'left', md: 'right'}}> 
          {t('intro--write')}
        </Text>
      </Box>
      <Box gridColumn='1/3' justifySelf='flex-end'>
        <Text fontSize={{sm: 'sm', md: 'xl'}} as='kbd' colorScheme='white' align={{sm: 'left', md: 'right'}}> 
          #iamdev
        </Text>
      </Box>
      <Box gridColumn='3/5'>
        <Text fontSize={{sm: 'sm', md: 'xl'}} as='kbd' colorScheme='white'>#iambusiness
        </Text>
      </Box>
      <Box gridColumn='2/4' alignSelf='center' justifySelf='center'>
        <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white' align={{sm: 'left', md: 'right'}}> 
          {t('intro--in')}
        </Text>
      </Box>
      <Box
        gridColumn='2/4' alignSelf='center' justifySelf='center'
        position='relative'
        bg='transparent'
        w='max-content'
        height='auto'
      >
        <Box
          position='absolute'
          top='50%'
          left={0}
          pb={[null, '0.3em']}
          transform='translateY(-50%)'
          bg='transparent'
          w='100%'
          height='auto'
        >
          <Text align='center' fontSize='xl'>
            <Text as='kbd' fontSize='xl'>#hi</Text> {t('intro--channel')}
          </Text>
        </Box>
        <ParticlesButton>
          <Text align='center' fontSize='xl'>
            <Text as='kbd' fontSize='xl'>#hi</Text> {t('intro--channel')}
          </Text>
        </ParticlesButton>
      </Box>
    </Box>
  )
})
