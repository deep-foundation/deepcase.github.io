import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Flex, Hide, HStack, Show, Text } from './framework';
import { Thesis, ThesisDescription } from './theses';


const items = [
  {
    title: 'points--no-more-refactoring',
    text: 'points--no-more-refactoring--description',
  },
  {
    title: 'points--supports-all-code',
    text: 'points--supports-all-code--description'
  },
  {
    title: 'points--flexible-system',
    text: 'points--flexible-system--description'
  },
  {
    title: 'points--launch-anywhere',
    text: 'points--launch-anywhere--description'
  },
  {
    title: 'points--all-stages-on-single-platform',
    text: 'points--all-stages-on-single-platform--description'
  },
  {
    title: 'points--backend',
    text: 'points--backend--description'
  },
  {
    title: 'points--data-management',
    text: 'points--data-management--description'
  },
  {
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

const thesisDescription = {
  visible: i => ({ 
    opacity: [0, 1], 
    rotateX: [-90, 0],  
    scale: [0.5, 1], 
    display: 'block',
    y: [-200, 0],
    transition: { 
      duration: .9, 
      opacity: {duration: .5,}
      // delay: 0.5 
    } 
  }),
  hidden: { 
    opacity: [1, 0], 
    scale: [1, 1.4], 
    display: 'none',
    transition: { 
      duration: .9, 
      // delay: 0,
      opacity: {duration: .5,}
    } 
  }
};

export const DeepMainTheses = React.memo<any>(() => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const[index, setIndex] = useDeepMainTheses();
  const control = useAnimation();
  // useEffect(() => {
  //   setInterval(() => {
  //     index < 7 ? index + 1 : index == 0
  //     setIndex(index + 1)
  //   }, 2000)
  // })

  return(<Container maxW='container.xl'>
      <Box
        display='grid'
        gridTemplateColumns={{sm: '1fr', md: '0.5fr 1fr'}}
        gridTemplateRows={{sm: '0.1fr minmax(40vmax, 1fr) 0.1fr', md: '1fr'}}
        rowGap={4}
        alignItems='center'
        justifyItems='center'
        w='100%'
      >
        <Show below='md'>
          <Box py={2} px={4}>
            {items.map((item, i) => {
              return (
                <motion.div
                  style={{textAlign: 'center', padding: '0 1rem', boxSizing: 'border-box'}}
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
                  <Text size='md' fontWeight='bold'>
                    {t(item.title)}
                  </Text>
                </motion.div>
              );
            })}
          </Box>
        </Show>
        <Hide below='md'>
          <Flex 
            direction='column'
            sx={{
              '@media(min-width: 830px)': {
                backgroundImage: 'linear-gradient(to top, #ccc 0%, #ccc 50%, transparent 50%)',
                backgroundSize: '1px 20px',
                backgroundPosition: 'right',
                backgroundRepeat: 'repeat-y',
              }
            }}
          >
            <Thesis index={index} onClick={() => setIndex(0)} text={t("points--no-more-refactoring")} i={0} />
            <Thesis index={index} onClick={() => setIndex(1)} text={t("points--supports-all-code")} i={1} />
            <Thesis index={index} onClick={() => setIndex(2)} text={t("points--flexible-system")} i={2} />
            <Thesis index={index} onClick={() => setIndex(3)} text={t("points--launch-anywhere")} i={3} />
            <Thesis index={index} onClick={() => setIndex(4)} text={t("points--all-stages-on-single-platform")} i={4} />
            <Thesis index={index} onClick={() => setIndex(5)} text={t("points--backend")} i={5} />
            <Thesis index={index} onClick={() => setIndex(6)} text={t("points--data-management")} i={6} />
            <Thesis index={index} onClick={() => setIndex(7)} text={t("points--business-logic")} i={7} />
          </Flex>
        </Hide>
        {[<Box
          pos='relative'
          key={language}
          w='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          boxSizing='border-box'
          pl={{sm: 0, md: 8}}
        >
          {items.map((item, i) => (<ThesisDescription key={i} index={index} item={item} i={i} />))}
        </Box>]}
        <Show below='md'>
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
        </Show>
      </Box>
    </Container>
  )
});
