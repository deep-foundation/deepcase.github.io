import React from "react";
import { useTranslation } from 'react-i18next';
import { Box, Center, Code, Divider, Text, useMediaQuery, VStack, Img, useBreakpoint, useBreakpointValue, StackDivider } from './framework';
import { SpecialCard } from "./special-card";


const GridCard = React.memo(({
  children, 
  columns = '1fr max-content', 
  direction = 'column-reverse',
  alignItem = 'baseline',
}:{
  children: any; 
  columns?: any;
  direction?: any;
  alignItem?: any;
}) => {
  return (<Box sx={{
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: columns,
    columnGap: '2rem',
    alignItems: alignItem,
    '@media(max-width: 1420px)': {
      alignItems: 'center',
    },
    '@media(max-width: 850px)': {
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      flexDirection: direction,
    }
  }}>{children}</Box>)
});

export const SpecialCardsText = React.memo(() => {
  const divider = useBreakpoint();
  const { t } = useTranslation();

  return (<VStack spacing={{ sm: '7rem', lg: '5rem' }} divider={<StackDivider borderColor={{sm: 'light', md: 'transparent'}} />}>
      <GridCard columns='max-content 1fr' direction='column' alignItem='flex-start'>
        <Box w='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/1.svg' htmlHeight='100%' htmlWidth='100%' sx={{transform: 'translate(-50%, 2.5rem)'}} alt='icon' />}
            icon2={<Img src='/flags/1_2.svg' htmlHeight='100%' htmlWidth='100%' sx={{transform: 'translateX(-50%)'}} alt='icon' />}
            title={t('flag-title--operational-environment')}
            description={t('flag-description--operational-environment')}
          />
        </Box>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}} as='div' width='100%'>
          {t('flag-article--operational-environment')}
        </Text>
      </GridCard>

      <GridCard alignItem='flex-start'>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          {t('flag-article--new-programming-paradigm')}
        </Text>
        <Box w='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/3.svg' sx={{transform: 'translate(-50%, 2rem)'}} htmlWidth='100%'  htmlHeight='100%' alt='icon' />}
            icon2={<Img src='/flags/3_2.svg' sx={{transform: 'translateX(-50%)'}} alt='icon' />}
            title={t('flag-title--new-programming-paradigm')}
            description={t('flag-description--new-programming-paradigm')}
          />
        </Box>
      </GridCard>

      <GridCard columns='max-content 1fr' direction='column' alignItem='flex-start'>
        <Box w='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/2.svg' sx={{transform: 'translate(-50%, 2rem)'}} alt='icon' htmlHeight='100%' htmlWidth='100%' />}
            icon2={<Img src='/flags/2_2.svg' sx={{transform: 'translateX(-50%)'}} alt='icon' htmlHeight='100%' htmlWidth='100%' />}
            title={t('flag-title--all-languages')}
            description={t('flag-description--all-languages')}
          />
        </Box>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          {t('flag-article--all-languages')}
        </Text>
      </GridCard>

      <GridCard alignItem='center'>
        <Box>
          <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
            {t('flag-article--semantic-system')}
          </Text>
          <Center py='2rem'>
            <pre>
            <Code variant='solid' colorScheme='transparentDark' size='full' sx={{borderRadius: '0.175rem', padding: '1rem', fontSize: '1rem'}}>
              {`{
  can(where: {
    object_id: { _eq: 5 },
    subject_id: { _eq: 165 },
    action_id: { _eq: 28 },
  }) {
    rule_id
  }
}`}
            </Code>
            </pre>
          </Center>
        </Box>
        <Box w='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/4.svg' sx={{transform: 'translate(-50%, 2rem)'}} alt='icon' htmlHeight='100%' htmlWidth='100%' />}
            icon2={<Img src='/flags/4_2.svg' sx={{transform: 'translateX(-50%)'}} htmlHeight='100%' htmlWidth='100%' alt='icon' />}
            title={t('flag-title--semantic-system')}
            description={t('flag-description--semantic-system')}
          />
        </Box>
        
      </GridCard>
      
    </VStack>
  )
})