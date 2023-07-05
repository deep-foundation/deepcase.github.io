import { motion, useAnimation } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Flex, Hide, HStack, Show, Text } from './framework';
import { Thesis, ThesisDescription } from './theses-copy';
import { ImageListItem } from '@material-ui/core';


const items = [
  {
    id: 0,
    title: 'points--no-more-refactoring',
    text: 'points--no-more-refactoring--description',
  },
  {
    id: 1,
    title: 'points--supports-all-code',
    text: 'points--supports-all-code--description'
  },
  {
    id: 2,
    title: 'points--flexible-system',
    text: 'points--flexible-system--description'
  },
  {
    id: 3,
    title: 'points--launch-anywhere',
    text: 'points--launch-anywhere--description'
  },
  {
    id: 4,
    title: 'points--all-stages-on-single-platform',
    text: 'points--all-stages-on-single-platform--description'
  },
  {
    id: 5,
    title: 'points--backend',
    text: 'points--backend--description'
  },
  {
    id: 6,
    title: 'points--data-management',
    text: 'points--data-management--description'
  },
  {
    id: 7,
    title: 'points--business-logic',
    text: 'points--business-logic--description_title',
    points: [
      {
        id: 1,
        text: 'points--business-logic--description--point_1',
      },
      {
        id: 2,
        text: 'points--business-logic--description--point_2',
      },
      {
        id: 3,
        text: 'points--business-logic--description--point_3',
      },
    ]
  },
];

export function useDeepMainTheses() {
  return useState(0);
}

const indicatorSize = 10;
const indicatorAlpha = 0.3;

export const DeepMainTheses = React.memo<any>(() => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  // const[active, setActive] = useState(false);
  const[index, setIndex] = useState(0);
  const control = useAnimation();
  // useEffect(() => {
  //   setInterval(() => {
  //     index < 7 ? index + 1 : index == 0
  //     setIndex(index + 1)
  //   }, 3000)
  // })

  // const clickActivation = useCallback((i) => {
  //   setActive(!active);
  // }, [active]);

  return(<Container maxW='container.xl'>
      <Box
        display='grid'
        gridTemplateColumns={{sm: '1fr', md: '0.5fr 1fr'}}
        gridTemplateRows={{sm: '0.1fr minmax(40vmax, 1fr) 0.1fr', md: '1fr'}}
        rowGap={4}
        alignItems='center'
        justifyItems='center'
        w='100%'
        h='100%'
      >
        {/* <Show below='md'>
          <Box py={2} px={4}>
            {items.map((item, i) => {
              return (
                <motion.div
                  style={{textAlign: 'center', padding: '0 1rem', boxSizing: 'border-box',}}
                  animate={{
                    opacity: index === i ? [0, 0.5, 1] : 0,
                    scale: index === i ? 1.2 : 1,
                    // x: index === i ? '0%' : '-100%',
                    display: index === i ? 'block' : 'none',
                    originX: '50%',
                  }}
                  transition={{
                    type: "spring", damping: 3, bounce: 1, stiffness: 110, mass: 0.3
                  }}
                  key={i}
                  onClick={() => setIndex(i)}
                >
                  <Text size='md' fontWeight='bold' color='white'>
                    {t(item.title)}
                  </Text>
                </motion.div>
              );
            })}
          </Box>
        </Show> */}
        <Hide below='md'>
          <Flex 
            direction='column'
            height='100%'
            sx={{
              '@media(min-width: 830px)': {
                backgroundImage: 'linear-gradient(to top, #ccc 0%, #ccc 50%, transparent 50%)',
                backgroundSize: '1px 20px',
                backgroundPosition: 'right',
                backgroundRepeat: 'repeat-y',
              }
            }}
          >
            {items.map((item, i) => (<Thesis isActive={
              index === i ? console.log('index-true', index) : console.log('index-false', index)} text={t(item.title)} key={item.id} onClickActive={() => {
                const index = item.id;
                setIndex(i);
                console.log('index', index);
                console.log('i', i);
              }} />))}
          </Flex>
        </Hide>
        <Box
          pos='relative'
          // key={language}
          w='100%'
          h='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          boxSizing='border-box'
          pl={{sm: 0, md: 8}}
        >
          {items.map((item, i) => (
            <ThesisDescription 
              isActive={index == i ? true : false} 
              key={item.id} 
              description={item.text} 
              points={item.points} 
              onClick={() => console.log('iTD', i)}
            />))}
        </Box>
        {/* <Show below='md'>
          <HStack justifyContent='center' py={2}>
            {items.map((item, i) => {
              return (
                <motion.div
                  style={{
                    width: indicatorSize,
                    height: indicatorSize,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    display: 'flex',
                    justifyItems: 'center',
                    opacity: indicatorAlpha
                  }}
                  animate={{
                    opacity: index === i ? 1 : indicatorAlpha,
                    scale: index === i ? 1.1 : 1
                  }}
                  key={i}
                  onClick={() => setIndex(i)}
                />
              );
            })}
          </HStack>
        </Show> */}
      </Box>
    </Container>
  )
});
