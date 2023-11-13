import { Box, Img, Text, useColorMode } from '@chakra-ui/react';
import { 
  AnimatePresence, 
  MotionValue, 
  motion, 
  useAnimation, 
  useInView, 
  useIsPresent} from 'framer-motion';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';


const variantTitleSide = {  
  show: {
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      type: 'spring',
      delay: 0.35,
      display: {
        delay: 0.3
      }
    }
  },
  hide: {
    opacity: 0,
    scale: 0.3,
    display: 'none',
    transition: {
      type: 'spring',
      display: {
        delay: 0.2
      }
    }
  }
}

const variantDescSide = { 
  show: {
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      type: 'spring',
      delay: 0.35,
      display: {
        delay: 0.3
      }
    }
  },
  hide: {
    opacity: 0,
    scale: 0.3,
    display: 'none',
    transition: {
      type: 'spring',
      display: {
        delay: 0.2
      }
    }
  }
}

export const DeepFlag = memo(function DeepFlag({
  blockWidth = 19,
  blockHeight = 19,
  subtitle,
  title,
  description,
  Icon = React.Fragment, 
  xMotion, 
  yMotion, 
  ...props
}:{
  blockWidth?: number;
  blockHeight?: number;
  subtitle: string;
  title: string;
  description: string;
  Icon?: any;
  xMotion: MotionValue;
  yMotion: MotionValue;
  [key:string]: any;
  }) {
  const [revert, setRevert] = useState(true);
  const viewRef = useRef<any>();
  const { t } = useTranslation();
  const isPresent = useIsPresent();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (revert === true) {
      animation1.start('show');
      animation2.start('hide');
    } else {
      animation1.start('hide');
      animation2.start('show');
    }
  }, [revert, animation1, animation2]);

  const isInView = useInView(viewRef);

  const {colorMode} = useColorMode();

  return (<Box
      sx={{
        width: 370,
        height: 370,
        position: 'relative',
        borderRadius: '1.375rem',
        overflow: 'hidden',
        bg: 'transparent',
        p: '1.5rem 2rem',
      }}
    >
      <AnimatePresence>
        <Box 
          width='100%'
          height='100%'
          as={motion.div}
          animate={animation2}
          exit='hide'
          initial='hide'
          flexFlow='column'
          variants={variantDescSide}
          onTap={() => {
            setRevert(!revert);
          }}
          sx={{
            alignItems: 'center',
            justifyContent: 'center', 
          }}
        >
          <Text align='center' textStyle='Regular14' mb='1.5rem'>{t(description)}</Text>
          {colorMode === 'light' ? <Img src='/logo_gold.svg' />
          : <Img src='/logo_blue.svg' />}
        </Box>
      </AnimatePresence>
      <AnimatePresence>
        <Box 
          width='100%'
          height='100%'
          as={motion.div}
          exit='hide'
          initial='show'
          animate={animation1}
          variants={variantTitleSide}
          onTap={() => setRevert(!revert)}
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
            '&>*:nth-of-type(2)': {
              mb: '1rem',
            }
          }}
      >
          <Text align='center' textStyle='Medium20'>{t(title)}</Text>
          <Text align='center' textStyle='Regular16'>{t(subtitle)}</Text>
          {/* image here */}
          <Image 
            Icon={Icon}
            xMotion={xMotion}
            yMotion={yMotion}
          />
        </Box>
      </AnimatePresence>
    </Box>
  )
})

export const Image = memo(function Image({
  Icon = React.Fragment, 
  xMotion, 
  yMotion, 
  ...props
}:{
  Icon?: any;
  xMotion: MotionValue;
  yMotion: MotionValue;
  [key:string]: any;
}) {
  
  return (<Box pos="relative" mt="1em">
      <Icon 
        xM={xMotion}
        yM={yMotion}
      />
    </Box>
  )
})
