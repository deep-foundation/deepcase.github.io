import React from "react";
import { useTranslation } from 'react-i18next';
import { Box, Center, Code, Divider, Text, useMediaQuery, VStack, Img, useBreakpointValue, StackDivider } from './framework';
import { SpecialCard } from "./special-card";


const GridCard = React.memo(({
  children, 
  columns = '1fr 25rem', 
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
    columnGap: '4rem',
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
  const [max850] = useMediaQuery('(max-width: 850px)');

  const divider = useBreakpointValue({ xs: 'gray.200', md: 'transparent' })
  const { t } = useTranslation();

  return (<VStack spacing={{sm: '7rem', lg: '5rem'}} divider={<StackDivider borderColor={divider} />}>
      <GridCard columns='25rem 1fr' direction='column' alignItem='flex-start'>
        <Box maxW='25rem' minW='20rem'>
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
      {/* {max850 && <Divider />} */}

      <GridCard alignItem='flex-start'>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          {t('flag-article--new-programming-paradigm')}
        </Text>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/2.svg' sx={{transform: 'translate(-50%, 2rem)'}} htmlWidth='100%'  htmlHeight='100%' alt='icon' />}
            icon2={<Img src='/flags/2_2.svg' sx={{transform: 'translateX(-50%)'}} alt='icon' />}
            title={t('flag-title--new-programming-paradigm')}
            description={t('flag-description--new-programming-paradigm')}
          />
        </Box>
      </GridCard>
      {/* {max850 && <Divider />} */}

      <GridCard columns='23rem 1fr' direction='column' alignItem='flex-start'>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/3.svg' sx={{transform: 'translate(-50%, 2rem)'}} alt='icon' htmlHeight='100%' htmlWidth='100%' />}
            icon2={<Img src='/flags/3_2.svg' sx={{transform: 'translateX(-50%)'}} alt='icon' htmlHeight='100%' htmlWidth='100%' />}
            title={t('flag-title--all-languages')}
            description={t('flag-description--all-languages')}
          />
        </Box>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          {t('flag-article--all-languages')}
        </Text>
      </GridCard>
      {/* {max850 && <Divider />} */}

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
        <Box maxW='25rem' minW='20rem'>
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