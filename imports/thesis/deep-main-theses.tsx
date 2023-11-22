import { m, useAnimation, useInView, AnimatePresence, Variants, LazyMotion, domAnimation } from 'framer-motion';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Flex, Hide, HStack, Show, Text } from '../framework';
import { Thesis, ThesisDescription } from './theses';


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

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
      }
  }
};

const theses: Variants = {
  hidden: { scale: 0, x: 100 },
  show: { scale: 1, x: 0 }
};
              
export function useDeepMainTheses() {
  return useState(0);
}

const indicatorSize = 10;
const indicatorAlpha = 0.3;

export const DeepMainTheses = memo(() => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const[index, setIndex] = useState(0);
  const[isActive, setIsActive] = useState(false);
  const control = useAnimation();
  const ref = useRef(null);
  // @ts-ignore
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (isInView) { 
      control.start('show');
    } else {
      control.start('hidden');
    }
  }, [isInView]);

  function _useCycle(items){
    let currentOption = items[index]
    function cycle() {
      setIndex(index < items.length-1 ? index + 1 : 0)
    }
    return [currentOption, cycle];
  }

  const [mode, cycleMode] = _useCycle(items);
  
  function Timer(fn, t) {
    var timerObj = setInterval(fn, t);
    this.stop = function () {
      if (timerObj) {
        clearInterval(timerObj)
        //@ts-ignore
        timerObj = null;
      }
      return this;
    }
    this.start = function () {
      // @ts-ignore
      if (!timerObj) { 
        this?.stop();
        timerObj = setInterval(fn, t);
      }
      return this;
    }
    this.reset = function(newT = t) {
      t = newT;
      return this.stop().start();
    }
  };
  
  const timer = new Timer(() => {
    cycleMode();
  }, 4000);

  useEffect(() => {
    timer.start();
    return () => timer.stop();
  }, [index, cycleMode]);

  const clickActivation = useCallback((i) => {
    timer.stop();
    setIndex(i);
    setIsActive(index < i ? true : false);
    timer.reset();
    timer.start();
  }, [index, isActive, timer]);

  return(<Container maxW='container.2xl' pl={{sm: '1rem', lg: '5rem'}} pr={{sm: '1rem', lg: '5rem'}}>
      <Box
        display='grid'
        gridTemplateColumns={{sm: '1fr', md: '0.5fr 1fr'}}
        gridTemplateRows={{sm: 'minmax(5vmax, 0.5fr) 0.1fr', md: '1fr'}}
        rowGap={4}
        alignItems='center'
        justifyItems='center'
        w='100%'
        h='100%'
      >
        <Show below='md'>
          <Box py={2} px={4}>
            <AnimatePresence>
              {items.map((item, i) => {
                return (
                  <LazyMotion features={domAnimation}>
                    <Box as={m.div}
                      style={{textAlign: 'center', padding: '0 1rem', boxSizing: 'border-box',}}
                      animate={{
                        opacity: index === i ? [0, 0.5, 1] : 0,
                        scale: index === i ? 1.2 : 1,
                        x: index === i ? '0%' : '100%',
                        display: index === i ? 'block' : 'none',
                        originX: '50%',
                      }}
                      // @ts-ignore
                      transition={{
                        type: "spring", damping: 9, bounce: 0.5, stiffness: 120, mass: 0.7
                      }}
                      exit={{ opacity: 0, x: '100%', display: 'none' }}
                      key={item.id}
                      onClick={() => setIndex(i)}
                    >
                      <Text textStyle='Bold16'>
                        {t(item.title)}
                      </Text>
                    </Box>
                  </LazyMotion>
                );
              })}
            </AnimatePresence>
          </Box>
        </Show>
        <Hide below='md'>
          <LazyMotion features={domAnimation}>
            <Flex
              as={m.div}
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
              justifyContent='space-around'
              ref={ref}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {items.map((item, i) => (
                <LazyMotion features={domAnimation}>
                  <m.div
                    variants={theses}
                    key={item.id}
                  >
                    <Thesis 
                      isActive={index == i} 
                      id={item.id}
                      text={t(item.title)} 
                      onClickActive={(i) => {
                        clickActivation(i);
                      }} 
                    />
                  </m.div>
                </LazyMotion>
              ))}
            </Flex>
          </LazyMotion>
        </Hide>
        <Box
          pos='relative'
          // key={language}
          w='100%'
          h='100%'
          maxH='26rem'
          minH='21rem'
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
            />
          ))}
        </Box>
        <Show below='md'>
          <HStack justifyContent='center' py={2}>
            {items.map((item, i) => {
              return (<LazyMotion features={domAnimation}>
                  <m.div
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
                    key={item.id}
                    onClick={() => {
                      clickActivation(i);
                    }}
                  />
                </LazyMotion>
              );
            })}
          </HStack>
        </Show>
      </Box>
    </Container>
  )
});
