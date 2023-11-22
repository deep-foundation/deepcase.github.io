import { Box, Img, useColorMode, useMediaQuery, Text } from '@chakra-ui/react';
import { AnimatePresence, LazyMotion, Variants, domAnimation, m, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BackgroundGradient, BackgroundGradientGold } from './background-image';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import { BoxShadow } from '../box-shadow';
import { DeepFlag, DeepFlagPopover } from './deep-flag';
import { useTranslation } from 'react-i18next';


const transition = {
  type: "spring", mass: 0.5, bounce: 0.25, stiffness: 200, damping: 100
};

const variantsViewCustom: Variants = {
  show: (i: number) => ({
    x: 0,
    // x: (i === 1 || i === 3) ? 350 : 0,
    // y: i * -200,
    skew: 0,
    scale: 1,
    opacity: 1,
    transition: { 
      opacity: { 
        delay: Math.floor(i / 2) * 0.2 
      }, 
      duration: 1,
      type: 'spring',
    }
  }),
  hide: (i: number) => ({
    x: -150,
    // y: i * -150,
    skew: 50,
    scale: 0.7,
    opacity: 0,
    transition: { 
      delay: Math.floor(i / 2) * 0.2, 
      duration: 0,
    }
  }),
  initial: (i: number) => ({
    x: -150,
    // y: i * -150,
    skew: -50,
    scale: 0.7,
    opacity: 0,
  })
};


const variantDescText: Variants = { 
  show: {
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      type: 'spring',
      delay: 0.4,
      // display: {
      //   delay: 0.3
      // }
    }
  },
  hide: {
    opacity: 0,
    scale: 0.3,
    display: 'none',
    transition: {
      type: 'spring',
      delay: 0.2,
      // display: {
      //   delay: 0.2
      // }
    }
  }
};

const variantDescSideContainer: Variants = {
  show: index => ({
    opacity: 1,
    // scale: 1.5,
    width: 470,
    height: 470,
    display: 'flex',
    zIndex: 111,
    x: (index === 1 || index === 3) ? 150 : 100,
    y: (index === 0 || index === 1) ? -100 : 100,
    transition: {
      type: 'spring',
      delay: 0.35,
      // display: {
      //   delay: 0.2
      // }
    }
  }),
  hide: {
    opacity: 0,
    // scale: 0.3,
    width: 10,
    height: 10,
    display: 'none',
    zIndex: 1,
    transition: {
      type: 'spring',
      delay: 0.4,
      // display: {
      //   delay: 0.4
      // }
    }
  }
};

const variantDescBlock: Variants = {
  show: {
    opacity: 1,
    width: 400,
    height: 400,
    transition: {
      type: 'spring',
      delay: 0.4,
      // display: {
      //   delay: 0.3
      // }
    }
  },
  hide: {
    opacity: 0,
    width: 10,
    height: 10,
    transition: {
      type: 'spring',
      delay: 0.2,
      // display: {
      //   delay: 0.2
      // }
    }
  }
};

export const DeepFrameMouseShift = memo(function DeepFrameMouseShift({
  blockWidth = 370,
  blockHeight = 370,
  // onTapButton,
  subtitle,
  title,
  description,
  index = 0,
  Icon = Fragment,
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  // onTapButton?: () => any;
  subtitle: string;
  title: string;
  description: string;
  Icon?: any;
  index: number;
  [key:string]: any;
}) {
  const ref = useRef<any>(null);
  const viewRef = useRef<any>();

  const [max450] = useMediaQuery("(max-width: 450px)");
  const CENTER = 175;
  var xMotion = useSpring(0, { stiffness: 150, damping: 40 });
  var yMotion = useSpring(0, { stiffness: 200 });
    
  const x = useMotionValue(CENTER);
  const y = useMotionValue(CENTER);
  const springX = useSpring(x, { mass: 0.2, bounce: 0.25, stiffness: 200, damping: 100, restSpeed: 0.2, restDelta: 0.1 });
  const springY = useSpring(y, { mass: 0.2, bounce: 0.25, stiffness: 200, damping: 100, restSpeed: 0.2, restDelta: 0.1 });
      
  const shiftX = useTransform(springX, [0, 350], [-35, 35]);
  const shiftY = useTransform(springY, [0, 350], [-35, 35]);
  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left)));
    y.set(event.clientY - (rect.top));
  }

  function handleMouseLeave({x: nx, y: ny}) {
    x.set(nx);
    y.set(ny);
  }

  const localCalc = (x, y) => {
    const box = ref?.current?.getBoundingClientRect();
    return [x - (box?.left + (box?.width / 2)), y - (box?.top + (box?.height / 1.7))];
  };

  const { t } = useTranslation();
  const {colorMode} = useColorMode();
  const [revert, setRevert] = useState(false);
  const animation = useAnimation();
  const animationOpen = useAnimation();
  const animationDescription = useAnimation();

  useEffect(() => {
    if (revert) {
      animationOpen.start('show');
      animation.start('show');
      animationDescription.start('show');
    } else {
      animationOpen.start('hide');
      animation.start('hide');
      animationDescription.start('hide');
    }
  }, [revert, animation, animationOpen, animationDescription]);

  return (<LazyMotion features={domAnimation}>
        <m.div
          ref={ref}
          style={{
            width: 370,
            height: 370,
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            overflow: 'hidden',
          }}
          variants={variantsViewCustom}
          initial='initial'
          custom={index}
          // animate={control}
          whileInView='show'
          // viewport={{ once: true, amount: 0.5 }}
          onMouseMove={(event) => {
            handleMouse(event);
            (xMotion.set(localCalc(event.clientX, event.clientY)[0]), yMotion.set(localCalc(event.clientX, event.clientY)[1]));
          }}
          onMouseLeave={() => {
            handleMouseLeave({ x: CENTER, y: CENTER });
            xMotion.set(0);
            yMotion.set(0);
          }}
          onTap={() => {
            setRevert(!revert);
          }}
          // onViewportLeave={inViewport}
      ><>
        <Box
          as={m.div}
          sx={{
            width: 300,
            height: 300,
            position: 'relative',
            borderRadius: '0.5rem',
          }}
        >
          <Box sx={{
            position: 'relative',
            height: '100%',
            borderRadius: '0.5rem', 
            overflow: 'hidden',
          }}>
            {colorMode === 'dark' ? <BackgroundGradient /> : <BackgroundGradientGold />} 
          </Box>
          <BoxShadow
            styles={{
              x: shiftX,
              y: shiftY,
              top: 0,
              left: 0,
            }}
            position='absolute'
            onMouseRef={viewRef}
            blockHeight={300}
            blockWidth={300}
          >
            <Box bg='flagBackground' w='100%' h='100%'>
              <DeepFlagPopover 
                subtitle={subtitle}
                title={title}
                description={description}
                Icon = {Icon} 
                xMotion = {xMotion}
                yMotion = {yMotion}
              />
            </Box>
          </BoxShadow>
        </Box>
        <AnimatePresence>
          <m.div
            ref={ref}
            style={{
              display: "flex",
              placeItems: "center",
              placeContent: "center",
              overflow: 'hidden',
              position: 'absolute',
            }}
            animate={animationOpen}
            exit='hide'
            initial='hide'
            variants={variantDescSideContainer}
            custom={index}
            onMouseMove={(event) => {
              (xMotion.set(localCalc(event.clientX, event.clientY)[0]), yMotion.set(localCalc(event.clientX, event.clientY)[1]));
            }}
            onMouseLeave={() => {
              xMotion.set(0);
              yMotion.set(0);
            }}
            onTap={() => {
              setRevert(!revert);
            }}
          > 
            <Box
              sx={{
                maxWidth: 407,
                padding: '0.05rem',
                position: 'relative',
                borderRadius: '0.3rem',
                background: colorMode === 'dark' ? 'linear-gradient(180deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(120deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)',
              }}
            >
              <Box
                as={m.div}
                flexFlow='column'
                animate={animationDescription}
                exit='hide'
                variants={variantDescBlock}
                initial='hide'
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              > 
                <Box 
                  bg='flagBackground' 
                  w='100%' h='100%'
                  borderRadius='0.3rem'
                >
                  <Box 
                    width='100%'
                    height='100%'
                    as={m.div}
                    animate={animation}
                    exit='hide'
                    initial='hide'
                    flexFlow='column'
                    variants={variantDescText}
                    // onTap={() => {
                    //   setRevert(!revert);
                    // }}
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center', 
                      p: '2rem',
                    }}
                  >
                    <Text align='center' textStyle='Regular14' mb='1.5rem'>{t(description)}</Text>
                    {colorMode === 'light' ? <Img src='/logo_gold.svg' />
                    : <Img src='/logo_blue.svg' />}
                  </Box>
                </Box>
              </Box>
            </Box>
          </m.div>
        </AnimatePresence></> 
      </m.div>
    </LazyMotion>
  )
})