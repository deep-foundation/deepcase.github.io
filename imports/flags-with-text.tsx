import { memo, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Box, Center, Code, Img, StackDivider, Text, VStack } from './framework';
import { Flag } from "./flag";
import { Hands } from "./flags-icons/hands";
import { Cat } from "./flags-icons/cat";
import { Stairs } from "./flags-icons/stairs";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";


const GridCard = memo(function GridCard({
  children, 
  columns = '1fr max-content', 
  direction = 'column-reverse',
  alignItem = 'baseline',
  ...props
}:{
  children: any; 
  columns?: any;
  direction?: any;
  alignItem?: any;
  [props: string]: any;
}) {

  return (<Box sx={{
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: columns,
    columnGap: '8rem',
    '@media only screen and (min-width: 1051px) and (max-width: 1396px)': {
      columnGap: '5rem'
    },
    alignItems: alignItem,
    '@media(max-width: 1420px)': {
      alignItems: 'center',
    },
    '@media(max-width: 1050px)': {
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      flexDirection: direction,
    },
    ...props
  }}>{children}</Box>)
});


const TextBlock = memo(function TextBlock({text, styles, textStyles}:{text: string; styles?: any; textStyles?: any;}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  return ( <Box 
      as={motion.div} 
      position='relative' w='100%' h='100%' 
      sx={styles} 
      ref={ref} 
    >
      <Text 
        as={motion.div} 
        textStyle='Regular16' 
        align={{sm: 'center', lg: 'justify'}} 
        width='100%'
        position='relative'
        sx={{
          '@media (min-width: 1051px)': {
            position: 'absolute',
            top: '35%',
            left: 0,
            transform: 'translateY(-50%)',
          },
          textStyles,
        }}
      >
        {text}
      </Text>
    </Box>
  )
})

export const FlagsWithText = memo(function FlagsWithText() {
  const { t } = useTranslation();

  return (<VStack 
      spacing={{ sm: '7rem', lg: '5rem' }} 
      divider={<StackDivider borderColor={{sm: 'light', lg: 'transparent'}} m={{sm: '5rem', lg: 0}} />}>
      <GridCard columns='max-content 1fr' direction='column' alignItem='flex-start'>
        <Box w={{sm: '20rem', '2xl': '23rem'}}>
          <Flag
            Icon={Stairs}
            title={t('flag-title--operational-environment')}
            description={t('flag-description--operational-environment')}
          />
        </Box>
       
        <TextBlock text={t('flag-article--operational-environment')} />
      </GridCard>

      <GridCard alignItem='flex-start'>
        <TextBlock text={t('flag-article--new-programming-paradigm')}/>
  
        <Box w={{sm: '20rem', '2xl': '23rem'}}>
          <Flag
            Icon={Cat}
            title={t('flag-title--new-programming-paradigm')}
            description={t('flag-description--new-programming-paradigm')}
          />
        </Box>
      </GridCard>

      <GridCard columns='max-content 1fr' direction='column' alignItem='flex-start'>
        <Box w={{sm: '20rem', '2xl': '23rem'}}>
          <Flag
            icon1={<Img src='/flags/2.svg' sx={{transform: 'translate(-50%, 2rem)'}} alt='icon' htmlHeight='100%' htmlWidth='100%' />}
            icon2={<Img src='/flags/2_2.svg' sx={{transform: 'translateX(-50%)'}} alt='icon' htmlHeight='100%' htmlWidth='100%' />}
            title={t('flag-title--all-languages')}
            description={t('flag-description--all-languages')}
          />
        </Box>
        <TextBlock text={t('flag-article--all-languages')} />
        
      </GridCard>

      <GridCard>
        <TextBlock text={t('flag-article--semantic-system')} />
        {/* <Box 
          position='relative' 
          w='100%' 
          h='100%'
          sx={{
            '@media only screen and (min-width: 1051px) and (max-width: 1396px)': {
              gridColumn: '2/5',
              gridRow: '2/3',
            },
            '@media only screen and (min-width: 1397px) and (max-width: 1950px)': {
              gridColumn: '1/4',
              gridRow: '1/2'
            },
          }}
        >
          <Box py='2rem'
            sx={{
              '@media (min-width: 1396px)': {
                position: 'absolute',
                top: '35%',
                left: 0,
                transform: 'translateY(-50%)',
                py: 0,
              }
            }}
          >
            <pre>
            <Code variant='solid' colorScheme='transparent' size='full' sx={{borderRadius: '0.175rem', padding: '1rem', fontSize: '1.5rem', lineHeight: '3rem'}}>
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
          </Box>
        </Box>         */}
        
        <Box 
          w={{sm: '20rem', '2xl': '23rem'}} 
        >
          <Flag
            Icon={Hands}
            title={t('flag-title--semantic-system')}
            description={t('flag-description--semantic-system')}
          />
        </Box>
        
      </GridCard>   
    </VStack>
  )
})