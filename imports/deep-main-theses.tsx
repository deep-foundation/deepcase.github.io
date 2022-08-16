import { useLocalStore } from '@deep-foundation/store/local';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from './carousel';
import { Box, Container, Flex, Hide, Show, HStack } from './framework';
import { Thesis } from './theses';


const items = [
  {
    text: 'points--no-more-refactoring--description',
  },
  {
    text: 'points--supports-all-code--description'
  },
  {
    text: 'points--flexible-system--description'
  },
  {
    text: 'points--launch-anywhere--description'
  },
  {
    text: 'points--all-stages-on-single-platform--description'
  },
  {
    text: 'points--backend--description'
  },
  {
    text: 'points--data-management--description'
  },
  {
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

const pages = [1, 2, 3, 4, 5];
const indicatorSize = 10;
const indicatorPadding = 10;
const indicatorWidth = pages.length * indicatorSize;
const indicatorPaddingTotal = (pages.length - 1) * indicatorPadding;
const indicatorWidthTotal = indicatorWidth + indicatorPaddingTotal;
const indicatorAlpha = 0.3;

export const DeepMainTheses = React.memo<any>(() => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const[index, setIndex] = useDeepMainTheses();
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
        gridTemplateRows={{sm: 'minmax(70vmax, 1fr) 0.1fr', md: '1fr'}}
        w='100%'
      >
        <Hide below='md'>
          <Flex direction='column'>
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
        <Box
          pos='relative'
          // gridArea='span 8 / span 2'
          w='100%'
          display='flex'
          alignItems='center'
          // h='max-content'
          boxSizing='border-box'
          pl={{sm: 0, md: 8}}
          sx={{
            '@media(min-width: 830px)': {
              backgroundImage: 'linear-gradient(to top, #ccc 0%, #ccc 50%, transparent 50%)',
              backgroundSize: '1px 20px',
              backgroundRepeat: 'repeat-y',}
          }}
        >
          {/* <DashedBorder /> */}
          {[<Carousel key={language} index={index} items={items} />]}
        </Box>
        <Show below='md'>
          <HStack justifyContent='center'>
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
      {/* <Box
        display='grid'
        gridAutoFlow={{sm: 'row', md: 'column'}}
        gridTemplateColumns='0.5fr 1fr'
        background='rgb(0 0 0 / 15%)'
        boxShadow='0 0 20px 50px rgb(0 0 0 / 15%)'
      >
        <Hide below='md'>
          <Thesis index={index} onClick={() => setIndex(0)} text={t("points--no-more-refactoring")} i={0} />
          <Thesis index={index} onClick={() => setIndex(1)} text={t("points--supports-all-code")} i={1} />
          <Thesis index={index} onClick={() => setIndex(2)} text={t("points--flexible-system")} i={2} />
          <Thesis index={index} onClick={() => setIndex(3)} text={t("points--launch-anywhere")} i={3} />
          <Thesis index={index} onClick={() => setIndex(4)} text={t("points--all-stages-on-single-platform")} i={4} />
          <Thesis index={index} onClick={() => setIndex(5)} text={t("points--backend")} i={5} />
          <Thesis index={index} onClick={() => setIndex(6)} text={t("points--data-management")} i={6} />
          <Thesis index={index} onClick={() => setIndex(7)} text={t("points--business-logic")} i={7} />
        </Hide>
        <Box
          pos='relative'
          gridArea='span 8 / span 2'
          w='100%'
          boxSizing='content-box'
          pl='8'
        >
          <DashedBorder />
          {[<Carousel key={language} index={index} items={items} />]}
        </Box>
        <Show below='md'>
          <Flex>
            {items.map((i, index) => {
              return (
                <motion.div
                  style={{
                    width: indicatorSize,
                    height: indicatorSize,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "calc(50% + 100px)",
                    left: `calc(50% + ${index - 1} * ${
                        indicatorSize + indicatorPadding
                    }px)`,
                    x: -indicatorWidthTotal / 2,
                    opacity: indicatorAlpha
                  }}
                  animate={{
                    opacity: current === index - 1 ? 1 : indicatorAlpha
                  }}
                  key={index}
                />
              );
            })}
          </Flex>
        </Show>
      </Box> */}
    </Container>
  )
});

const DashedBorder = React.memo<any>(() => {
  return(<svg viewBox="0 10 113 76" style={{position: 'absolute', top: 0, left: 0}}>
      <path 
        d="M 0,10 v100"
        style={{
          fill: 'none',
          stroke: 'white',
          strokeWidth: 0.1,
          strokeDasharray: 2,
        }}
      />
    </svg>
  )
})