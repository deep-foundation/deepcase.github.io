import AppleIcon from '@material-ui/icons/Apple';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import React from "react";
import { useTranslation } from 'react-i18next';
import { Box, Center, Code, Divider, Text, useMediaQuery, VStack, Img } from './framework';
import { SpecialCard } from "./special-card";


const GridCard = React.memo(({
  children, 
  columns = '1fr 25rem', 
  direction = 'column-reverse',
}:{
  children: any; 
  columns?: any;
  direction?: any;
}) => {
  return (<Box sx={{
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: columns,
    columnGap: '4rem',
    alignItems: 'baseline',
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
  const { t } = useTranslation();

  return (<VStack spacing={{sm: '7rem', lg: '5rem'}}>
      <GridCard columns='25rem 1fr' direction='column'>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/1.png' />}
            // icon2={<BathtubIcon color='secondary' />}
            // icon3={<BathtubIcon color='error' />}
            title={t('flag-title--operational-environment')}
            description={t('flag-description--operational-environment')}
          />
        </Box>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}} as='div' width='100%'>
          {t('flag-article--operational-environment')}
        </Text>
      </GridCard>
      {max850 && <Divider />}

      <GridCard>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          {t('flag-article--new-programming-paradigm')}
        </Text>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/2.png' />}
            // icon2={<BeachAccessIcon color='secondary' />}
            // icon3={<BeachAccessIcon color='error' />}
            title={t('flag-title--new-programming-paradigm')}
            description={t('flag-description--new-programming-paradigm')}
          />
        </Box>
      </GridCard>
      {max850 && <Divider />}

      <GridCard columns='23rem 1fr' direction='column'>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/3.png' />}
            // icon2={<EmojiSymbolsIcon color='secondary' />}
            // icon3={<EmojiSymbolsIcon color='error' />}
            title={t('flag-title--all-languages')}
            description={t('flag-description--all-languages')}
          />
        </Box>
        <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
          {t('flag-article--all-languages')}
        </Text>
      </GridCard>
      {max850 && <Divider />}

      <GridCard>
        <Box>
          <Text fontSize='sm' align={{sm: 'center', lg: 'justify'}}>
            {t('flag-article--semantic-system')}
          </Text>
          <Center py='2rem'>
            <Code variant='solid' colorScheme='linkedin' size='full' sx={{borderRadius: '0.175rem', padding: '1rem'}}>
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
          </Center>
        </Box>
        <Box maxW='25rem' minW='20rem'>
          <SpecialCard
            icon1={<Img src='/flags/4.png' />}
            // icon2={<AppleIcon color='secondary' />}
            // icon3={<AppleIcon color='error' />}
            title={t('flag-title--semantic-system')}
            description={t('flag-description--semantic-system')}
          />
        </Box>
        
      </GridCard>
    </VStack>
  )
})